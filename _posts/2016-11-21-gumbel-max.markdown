---
layout: post
title:  "Gumbel-Max Trick Inference"
date:   2016-11-21 19:00:00 -0500
comments: true
post_url: gumbel-max-inference
---

There has been recently two concurrent works on using a relaxed version of the Gumbel-Max Trick to train deep probabilistic models ([The Concrete Distribution: A Continuous Relaxation of Discrete Random Variables](https://arxiv.org/abs/1611.00712) and [Categorical Reparameterization with Gumbel-Softmax](https://arxiv.org/abs/1611.01144)). I like to compare the Gumbel-Max trick, as described in this [blogpost](https://hips.seas.harvard.edu/blog/2013/04/06/the-gumbel-max-trick-for-discrete-distributions/), to the [Reparametrization Trick](https://arxiv.org/abs/1306.0733) (previously referred to as [Backpropagating through Random Number Generators](https://www.semanticscholar.org/paper/Simple-Statistical-Gradient-Following-Algorithms-Williams/39f52477c2efeef451a309caf74c4145e05efa79)) as it decomposes sampling from a parametrized distribution into two parts: sampling from a standard distribution and a deterministic parametrized function, possibly resulting in [accelerated sampling](http://timvieira.github.io/blog/post/2016/07/04/fast-sigmoid-sampling/). 

The Gumbel-Max Trick is a method to sample from a categorical distribution $$ \text{Cat}\big((\alpha_{k})_{k \leq K}\big) $$, where category $$ k $$ has $$ \alpha_k $$ probability to be sampled, and relies on the Gumbel distribution:

$$ F_{Gumbel}(\epsilon) = \exp\big(-\exp(-\epsilon)\big) $$

This trick is based on the clever observation that, if $$ (\epsilon_{k'})_{k' \leq K} $$, then $$ k_{max} = \text{argmax}_{k' \leq K}\big(\epsilon_{k'} + \log(\alpha_{k'})\big) $$ follows the desired categorical distribution $$ \text{Cat}\big((\alpha_{k})_{k \leq K}\big) $$. In practice, we can sample from this Gumbel distrbution using auxiliary random uniform variables $$ u $$ in $$ [0, 1] $$ using inverse transform sampling:

$$ u \sim \mathcal{U}\big([0, 1]\big) \\
\epsilon = F_{Gumbel}^{-1}(u) = -\log\big(-\log(u)\big) $$

Last summer, [Luke Vilnis](https://people.cs.umass.edu/~luke/) asked me whether it was possible to practically infer those Gumbel random variables $$ (\epsilon_{k'})_{k' \leq K} $$ given an observed category $$ k $$. That is: what is the expression of the posterior distribution $$ p\big((\epsilon_{k'})_{k' \leq K} \mid K_{max} = k\big) $$ and how to sample from it ? As a thought experiment, I will describe in this blogpost how to do it.


### Uniform reparametrization
If we choose to be interested in the associated uniform random variables $$ (u_{k'})_{k' \leq K} = \big(F(\epsilon_{k'})\big)_{k' \leq K} $$, inference of those latent variables looks conceptually easier. Indeed, given the observed category $$ k $$, $$ p\big((u_{k'})_{k' \leq K} \mid K_{max} = k\big) $$ is uniform within the constraints:

$$
\forall k' \leq K ~~ -\log\big(-\log(u_{k'})\big) + \log(\alpha_{k'}) \leq -\log\big(-\log(u_{k})\big) + \log(\alpha_{k})
$$


### Sampling
In general, sampling from an arbitrary uniform distribution can be non-trivial and requires Markov Chain Monte Carlo algorithms like *hit-and-run*. In this case, you will see a derivation of an exact Monte Carlo procedure from the desribed constraints.

$$
\forall k' \leq K ~~ -\log\big(-\log(u_{k'})\big) + \log(\alpha_{k'}) \leq -\log\big(-\log(u_{k})\big) + \log(\alpha_{k}) \\
\Leftrightarrow -\log\big(-\log(u_{k'})\big) \leq -\log\big(-\log(u_{k})\big) + \log\left(\frac{\alpha_{k}}{\alpha_{k'}}\right) \\
\Leftrightarrow u_{k'} \leq \exp\Big(-\exp\Big(\log(-\log(u_{k})) + \log\left(\frac{\alpha_{k'}}{\alpha_{k}}\right)\Big)\Big) \\
\Leftrightarrow 0 \leq u_{k'} \leq u_{k}^{\frac{\alpha_{k'}}{\alpha_{k}}} \leq 1
$$

Meaning that $$ p\big((\epsilon_{k'})_{k' \neq k} \mid K_{max} = k, u_{k}\big) = \mathcal{U}\big([0, u_{k}^{\frac{\alpha_{k'}}{\alpha_{k}}}]\big) $$. Finally, we derive the expression of $$ p(\epsilon_{k} \mid K_{max} = k) $$:

$$
p\big((u_{k'})_{k' \leq K} \mid K_{max} = k\big) = \frac{p\big((u_{k'})_{k' \leq K}\big) p\big(K_{max} = k \mid (u_{k'})_{k' \leq K}\big)}{p(K_{max} = k)} \\
\Leftrightarrow p\big((u_{k'})_{k' \leq K} \mid K_{max} = k\big) = \alpha_{k}^{-1} \\
\Leftrightarrow p\big((u_{k'})_{k' \neq k} \mid u_{k}, k\big) p(u_{k} \mid K_{max} = k) = \alpha_{k}^{-1} \\
\Leftrightarrow \prod_{k' \neq k}{u_{k}^{-\frac{\alpha_{k'}}{\alpha_{k}}}} p(u_{k} \mid K_{max} = k) = \alpha_{k}^{-1} \\
\Leftrightarrow u_{k}^{-\sum_{k' \neq k}{\frac{\alpha_{k'}}{\alpha_{k}}}} p(u_{k} \mid K_{max} = k) = \alpha_{k}^{-1} \\
\Leftrightarrow u_{k}^{\frac{\alpha_{k} - 1}{\alpha_{k}}} p(u_{k} \mid K_{max} = k) = \alpha_{k}^{-1} \\
\Leftrightarrow p(u_{k} \mid K_{max} = k) = \alpha_{k}^{-1} u_{k}^{\frac{1 - \alpha_{k}}{\alpha_{k}}}
$$

Once again, we can efficiently sample from this posterior distribution using auxiliary random uniform variables $$ v_{k'} $$ through inverse transform sampling:

$$
\forall k' \leq K ~~ v_{k'} \sim \mathcal{U}\big([0, 1]\big) \\
u_{k} = v_{k}^{\alpha_{k}^{-1}} \\
\forall k' \neq k ~~ u_{k'} = u_{k}^{\frac{\alpha_{k'}}{\alpha_{k}}} v_{k'}
$$

If you were to infer the Gumbel variables $$ (\epsilon_{k'})_{k' /leq K} $$, then $$ \epsilon_{k'} = -\log\big(-\log(u_{k'})\big) $$.

### Acknowledgements
I'm very grateful to [Luke Vilnis](https://people.cs.umass.edu/~luke/), [Vincent Dumoulin](http://vdumoulin.github.io/), [Kyle Kastner](https://kastnerkyle.github.io/) and my supervisors, [Yoshua Bengio](http://www.iro.umontreal.ca/~bengioy/yoshua_en/) and [Samy Bengio](http://bengio.abracadoudou.com/), for interesting discussions, helpful in writing this post. I discovered the Gumbel-Max Trick through the NIPS 2014 paper [A* sampling](http://papers.nips.cc/paper/5449-a-sampling). 
