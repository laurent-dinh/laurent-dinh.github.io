---
layout: post
title:  "Real NVP visualizations"
date:   2016-07-12 22:02:01 -0500
comments: true
post_url: real-nvp-visualization
---

{::nomarkdown}
<style type="text/css">
  {% include real_nvp_visualization.css %}
</style>
<script src='/js/wheelzoom.js'></script>
{:/nomarkdown}

This post is a visualization page for my recent on generative modelling, [*Density estimation using Real NVP*]({{ site.baseurl }}/reports#density-estimation-using-real-nvp), done in collaboration with [Google Brain](https://research.google.com/teams/brain/) that I will present during the [NIPS Deep Learning Symposium 2016](https://sites.google.com/site/nips2016deeplearnings/).

### Visualization
{::nomarkdown}
{% include real_nvp_visualization.html %}
{:/nomarkdown}

### Samples
The generative procedure from the model is very similar to the one used in [*Variational*](https://arxiv.org/abs/1312.6114) [*Auto-Encoders*](https://arxiv.org/abs/1401.4082) and [*Generative Adversarial Networks*](https://arxiv.org/abs/1406.2661): sample a vector $$ z $$ from a simple distribution (here a Gaussian) and pass it through the generator network $$ g $$ to obtain a sample $$ x = g(z) $$. From the generated samples, it seems the model was able to capture the statistics from the original data distribution. For example, the samples are in general relatively sharp and coherent and therefore suggest that the models understands something more than mere correlation between neighboring pixels. This is due to not relying on fixed form reconstruction cost like squared loss on the data level. The models seems also to understand to some degree the notion of foreground/background, and volume, lighting and shadows. 

### Extrapolation
The generator network $$ g $$ has been built in the paper according to a convolutional architecture, making it relatively easy to reuse the model to generate bigger images. As the model is convolutional, the model is trying to generate a "texture" of the dataset rather than an upsampled version of the images it was trained on. This explains why the model is most successful when trained on background datasets like LSUN different subcategories. This sort of behaviour [can also be observed](https://twitter.com/soumithchintala/status/673642977781293056) in other models like [Deep Convolutional Generative Adversarial Networks](https://arxiv.org/abs/1511.06434).

### Information loss
The inference model $$ f = g^{-1} $$ has been trained to reorganize an input data point $$ x $$ into a set of feature vectors $$ f(x) =  (z^{(1)}, z^{(2)}, z^{(3)}, z^{(4)}, z^{(5)}) $$ from simpler, local features to more complex and global features. Inspired by the paper [*Towards Conceptual Compression*](https://arxiv.org/abs/1604.08772), we try to observe the influence of those feature vectors, we choose to see what happens when we replace those vectors $$ z^{(k)} $$ with resampled version $$ \epsilon^{(k)} $$.
For $$ 64 \times 64 $$ images datasets, from left to right:

* $$ x = g\big((z^{(1)}, z^{(2)}, z^{(3)}, z^{(4)}, z^{(5)})\big) $$;
* $$ g\big((\epsilon^{(1)}, z^{(2)}, z^{(3)}, z^{(4)}, z^{(5)})\big) $$;
* $$ g\big((\epsilon^{(1)}, \epsilon^{(2)}, z^{(3)}, z^{(4)}, z^{(5)})\big) $$;
* $$ g\big((\epsilon^{(1)}, \epsilon^{(2)}, \epsilon^{(3)}, z^{(4)}, z^{(5)})\big) $$;
* $$ g\big((\epsilon^{(1)}, \epsilon^{(2)}, \epsilon^{(3)}, \epsilon^{(4)}, z^{(5)})\big) $$.

We see that the degradation of the original image is very gradual and, depending on the dataset, the feature vector $$ z^{(5)} $$ is able to retain important high level information about the image.

### Manifold
The model has been trained to reorganize the data distribution into a Gaussian one. Since this distribution respect some degree of smoothness, we choose to build something resembling a sphere in the latent space $$ \mathcal{Z} $$. This sphere will be built using eight examples $$ (x_1, x_2, x_3, x_4, x_5, x_6, x_7, x_8) $$ and their latent representation $$ (z_1, z_2, z_3, z_4, z_5, z_6, z_7, z_8) $$ $$= \big(f(x_1), f(x_2), f(x_3), f(x_4), f(x_5), f(x_6), f(x_7), f(x_8)\big) $$ which will be parametrized by three angles $$ (\phi, \phi', \phi'') \in [0, 2\pi]^3 $$ with equation:
$$ z = \cos(\phi) \Big(\cos(\phi') \big(z_1 \cos(\phi'') + z_2 \sin(\phi'')\big) + \sin(\phi') \big(z_3 \cos(\phi'') + z_4 \sin(\phi'')\big)\Big) $$ $$ + \cos(\phi) \Big(\cos(\phi') \big(z_5 \cos(\phi'') + z_6 \sin(\phi'')\big) + \sin(\phi') \big(z_7 \cos(\phi'') + z_8 \sin(\phi'')\big)\Big) $$

We then remap this sphere into the input space using the generator network $$ g $$ to obtain the figure in the last column.
