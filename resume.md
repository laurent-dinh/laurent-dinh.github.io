---
layout: default
profile_picture:
  src: /assets/img/profile.jpg
  alt: website picture
---

{::nomarkdown}
<style>
a {
  color: unset;
}
small {
  position: relative;
  left: 5px;
  margin: 0px;
}
h1, h2 {
  margin-top: 30px;
  margin-bottom: 0px;
}
h4 {
}
h3 {
  font-size: 18px;
  margin-bottom: 0px;

  @include media-query($on-mobile) {
    font-size: 16px;
  }
}

h4 {
  font-size: 18px;
  margin-bottom: 0px;

  @include media-query($on-mobile) {
    font-size: 16px;
  }
}
p {
  margin-top: 0px;
  margin-bottom: 10px;
}
code {
  background: none;
  border: none;
  padding: 0px;
  margin-right: 10px;
}
.wrapper {
  max-width: 1000px;
}
@media print {
  html {
    scroll-padding-top: 0px;
  }
  body {
    zoom: 74%;
  }
  .site-footer {
    display: none;
  }
  .site-header {
    display: none;
  }
  .header-placeholder {
    display: none;
  }
  .page-content {
    top: 0px;
  }
  p {
    break-inside: avoid;
  }
  h1, h2, h3 {
    break-after: avoid;
  }
}
</style>
{:/nomarkdown}

<img style="float: right;" id="logo_static" src="{{ "assets/img/logo_static.svg" | prepend: site.baseurl }}" alt="Dinh logo"/>
# **Laurent Dinh**
Machine Learning Researcher  
<a id="email-link" href="mailto:{{ site.email }}" class="monospace"><nobr>{{ site.email }}</nobr></a><span class="monospace"> | </span><a href="{{ site.data.links.homepage_url }}" class="monospace"><nobr>{{ site.data.links.homepage_url }}</nobr></a>  

## **Research Experience**
`2022-now`<code></code>
**Machine Learning Researcher**, [*Apple*]({{ site.data.links.apple_ml_url }}), Cupertino,&nbsp;California,&nbsp;United&nbsp;States  

`2018-2021`
**Research Scientist**, [*Google Brain*]({{ site.data.links.brain_url }}), Montréal,&nbsp;Québec,&nbsp;Canada  

`2014-2017`
**Graduate Researcher**, [*Mila*]({{ site.data.links.mila_url }}), Montréal,&nbsp;Québec,&nbsp;Canada  
<small>Supervisor: [Yoshua&nbsp;Bengio]({{ site.data.links.yoshua_url }})</small>

`2017-2017`
**Research Intern**, [*DeepMind*]({{ site.data.links.deepmind_url }}), London,&nbsp;England,&nbsp;United&nbsp;Kingdom  
<small>Supervisors: [Nando&nbsp;De&nbsp;Freitas]({{ site.data.links.nando_url }}), [Misha&nbsp;Denil]({{ site.data.links.misha_url }})</small>

`2016-2017`
**Software Engineering Intern**, [*Google Brain*]({{ site.data.links.brain_url }}), Montréal,&nbsp;Québec,&nbsp;Canada  
<small>Supervisor: [Samy&nbsp;Bengio]({{ site.data.links.samy_url }})</small>

`2016-2016`
**Software Engineering Intern**, [*Google Brain*]({{ site.data.links.brain_url }}), Mountain&nbsp;View,&nbsp;California,&nbsp;United&nbsp;States  
<small>Supervisors: [Samy&nbsp;Bengio]({{ site.data.links.samy_url }}), [Jascha&nbsp;<nobr>Sohl-Dickstein</nobr>]({{ site.data.links.jascha_url }})</small>

`2015-2015`
**Software Engineering Intern**, [*Google Brain*]({{ site.data.links.brain_url }}), Mountain&nbsp;View,&nbsp;California,&nbsp;United&nbsp;States  
<small>Supervisor: [Samy&nbsp;Bengio]({{ site.data.links.samy_url }})</small>

`2013-2013`
**Visiting Researcher**, [*University of British Columbia*]({{ site.data.links.ubc_url }}), Vancouver,&nbsp;British&nbsp;Columbia,&nbsp;Canada  
<small>Supervisors: [Nando&nbsp;De&nbsp;Freitas]({{ site.data.links.nando_url }}), [Misha&nbsp;Denil]({{ site.data.links.misha_url }})</small>

`2011-2012`
**Visiting Researcher**, [*Mila*](http://mila.quebec), Montréal,&nbsp;Québec,&nbsp;Canada  
<small>Supervisor: [Yoshua&nbsp;Bengio]({{ site.data.links.yoshua_url }})</small>

## **Education**
`2014-2018`
[**Philosophiæ Doctor**]({{ site.data.links.udem_phd }}) **([Computer Science]({{ site.data.links.diro_url }}))**, [*Université de Montréal*]({{ site.data.links.udem_url }}), Montréal,&nbsp;Québec,&nbsp;Canada  
<small>Supervisor: [Yoshua&nbsp;Bengio]({{ site.data.links.yoshua_url }})</small>

`2012-2013`
[**Master of Science**]({{ site.data.links.ens_msc }}) **([Machine Learning and Computer Vision]({{ site.data.links.mva_url }}))**, [*ÉNS Paris-Saclay*]({{ site.data.links.ens_url }}), Cachan,&nbsp;Île-de-France,&nbsp;France

`2012-2013`
[**Master of Engineering**]({{ site.data.links.ecp_curriculum }}) **(Applied Mathematics)**, [*École Centrale Paris*]({{ site.data.links.ecp_url }}), Châtenay&nbsp;Malabry,&nbsp;Île-de-France,&nbsp;France

`2009-2012`
[**Bachelor of Engineering**]({{ site.data.links.ecp_curriculum }}), [*École Centrale Paris*]({{ site.data.links.ecp_url }}), Châtenay&nbsp;Malabry,&nbsp;Île-de-France,&nbsp;France

## **Publications and Preprints**

### [**LiDAR: Sensing Linear Probing Performance in Joint Embedding SSL Architectures**](https://arxiv.org/abs/2312.04000)  
[Vimal&nbsp;Thilak]({{ site.data.links.vimal_url }}), [Chen&nbsp;Huang]({{ site.data.links.chen_huang_url }}), [Omid&nbsp;Saremi]({{ site.data.links.omid_url }}), Laurent&nbsp;Dinh, [Hanlin&nbsp;Goh]({{ site.data.links.hanlin_url }}), [Preetum&nbsp;Nakkiran]({{ site.data.links.preetum_url }}), [Josh&nbsp;Susskind]({{ site.data.links.josh_url }}), [Etai&nbsp;Littwin]({{ site.data.links.etai_url }})  
[*International Conference on Learning Representations 2024*]({{ site.data.links.iclr2024_url | prepend: site.data.links.iclr_url }}) *(spotlight)*  

### [**Adaptivity and Modularity for Efficient Generalization Over Task Complexity**](https://arxiv.org/abs/2310.08866)  
[Samira&nbsp;Abnar]({{ site.data.links.samira_url }}), [Omid&nbsp;Saremi]({{ site.data.links.omid_url }}), Laurent&nbsp;Dinh, [Shantel&nbsp;Wilson]({{ site.data.links.shantel_url }}), [Miguel&nbsp;Angel&nbsp;Bautista]({{ site.data.links.miguel_url }}), [Chen&nbsp;Huang]({{ site.data.links.chen_huang_url }}), [Vimal&nbsp;Thilak]({{ site.data.links.vimal_url }}), [Etai&nbsp;Littwin]({{ site.data.links.etai_url }}), [Jiatao&nbsp;Gu]({{ site.data.links.jiatao_url }}), [Josh&nbsp;Susskind]({{ site.data.links.josh_url }}), [Samy&nbsp;Bengio]({{ site.data.links.samy_url }})  
[*Bay Area Machine Learning Symposium 2024*]({{ site.data.links.baylearn2024_url | prepend: site.data.links.baylearn_url }})  

### [**Generative Modeling with Phase Stochastic Bridges**](https://arxiv.org/abs/2310.07805)  
[Tianrong&nbsp;Chen]({{ site.data.links.tianrong_url }}), [Jiatao&nbsp;Gu]({{ site.data.links.jiatao_url }}), Laurent&nbsp;Dinh, [Evangelos&nbsp;A.&nbsp;Theodorou]({{ site.data.links.evangelos_url }}), [Josh&nbsp;Susskind]({{ site.data.links.josh_url }}), [Shuangfei&nbsp;Zhai]({{ site.data.links.shuangfei_url }})  
[*International Conference on Learning Representations 2024*]({{ site.data.links.iclr2024_url | prepend: site.data.links.iclr_url }}) *(oral)*  

### [**GAUDI: A Neural Architect for Immersive 3D Scene Generation**](https://arxiv.org/abs/2207.13751)  
[Miguel&nbsp;Angel&nbsp;Bautista]({{ site.data.links.miguel_url }}), [Pengsheng&nbsp;Guo]({{ site.data.links.pengsheng_url }}), [Samira&nbsp;Abnar]({{ site.data.links.samira_url }}), [Walter&nbsp;Talbott]({{ site.data.links.walter_url }}), [Alexander&nbsp;Toshev]({{ site.data.links.toshev_url }}), [Zhuoyuan&nbsp;Chen]({{ site.data.links.zhuoyuan_url }}), Laurent&nbsp;Dinh, [Shuangfei&nbsp;Zhai]({{ site.data.links.shuangfei_url }}), [Hanlin&nbsp;Goh]({{ site.data.links.hanlin_url }}), [Daniel&nbsp;Ulbricht]({{ site.data.links.daniel_ulbricht_url }}), [Afshin&nbsp;Dehghan]({{ site.data.links.afshin_url }}), [Josh&nbsp;Susskind]({{ site.data.links.josh_url }})  
[*Neural Information Processing Systems 2022*]({{ site.data.links.neurips2022_url | prepend: site.data.links.neurips_url }})

### [**Perfect Density Models Cannot Guarantee Anomaly Detection**](https://arxiv.org/abs/2012.03808)  
[Charline&nbsp;Le&nbsp;Lan]({{ site.data.links.charline_url }}), Laurent&nbsp;Dinh   
[*I Can't Believe It's Not Better! Workshop*]({{ site.data.links.icbinb20_url }}) [*(Neural Information Processing Systems 2020)*]({{ site.data.links.neurips2020_url | prepend: site.data.links.neurips_url }}) *(*[*oral*](https://slideslive.com/38942658/perfect-density-models-cannot-guarantee-anomaly-detection)*,* [*Entropic Paper Award*]({{ site.data.links.icbinb20_url }}awards/)*)*  
[*Special Issue: Probabilistic Methods for Deep Learning*]({{ site.data.links.pmdl_entropy_url | prepend:site.data.links.entropy_url | prepend : site.data.links.mdpi_url }}) [*(MPDI*]({{ site.data.links.mdpi_url }}) [*Entropy)*]({{ site.data.links.entropy_url | prepend: site.data.links.mdpi_url }})

### [**Augmented Normalizing Flows: Bridging the Gap Between Generative Flows and Latent Variable Models**](https://arxiv.org/abs/2002.07101)  
[Chin-Wei&nbsp;Huang]({{ site.data.links.cwh_url }}), Laurent&nbsp;Dinh, [Aaron&nbsp;Courville]({{ site.data.links.courville_url }})

### [**Solving ODE with Universal Flows: Approximation Theory for Flow-Based Models**](https://openreview.net/forum?id=cfKpOiUzF)    
[Chin-Wei&nbsp;Huang]({{ site.data.links.cwh_url }}), Laurent&nbsp;Dinh, [Aaron&nbsp;Courville]({{ site.data.links.courville_url }})  
[*Workshop on Integration of Deep Neural Models and Differential Equations*]({{ site.data.links.iclr2020_diff_eq_url }}) [*(International Conference on Learning Representations 2020)*]({{ site.data.links.iclr2020_url | prepend: site.data.links.iclr_url }}) *(oral)*  

### [**Discrete Flows: Invertible Generative Models of Discrete Data**](https://arxiv.org/abs/1905.10347)  
[Dustin&nbsp;Tran]({{ site.data.links.dustin_url }}), [Keyon&nbsp;Vafa]({{ site.data.links.keyon_url }}), [Kumar&nbsp;Krishna&nbsp;Agrawal]({{ site.data.links.kumar_krishna_url }}), Laurent&nbsp;Dinh, [Ben&nbsp;Poole]({{ site.data.links.poolio_url }})  
[*Deep Generative Models for Highly Structured Data*]({{ site.data.links.dgmsd_url }}) [*(International Conference on Learning Representations 2019)*]({{ site.data.links.iclr2019_url | prepend: site.data.links.iclr_url }})  
[*Neural Information Processing Systems 2019*]({{ site.data.links.neurips2019_url | prepend: site.data.links.neurips_url }})

### [**Invertible Convolutional Flow**](http://papers.nips.cc/paper/8801-invertible-convolutional-flow)  
[Mahdi&nbsp;Karami]({{ site.data.links.madhi_url }}), [Dale&nbsp;Schuurmans]({{ site.data.links.dale_url }}), [Jascha&nbsp;Sohl-Dickstein]({{ site.data.links.jascha_url }}), Laurent&nbsp;Dinh, [Daniel&nbsp;Duckworth]({{ site.data.links.dduckworth_url }})  
[*Neural Information Processing Systems 2019*]({{ site.data.links.neurips2019_url | prepend: site.data.links.neurips_url }}) *(spotlight)*

### [**A RAD approach to deep mixture models**](https://arxiv.org/abs/1903.07714)  
Laurent&nbsp;Dinh, [Jascha&nbsp;Sohl-Dickstein]({{ site.data.links.jascha_url }}), [Hugo&nbsp;Larochelle]({{ site.data.links.larochelle_url }}), [Razvan&nbsp;Pascanu]({{ site.data.links.razvan_url }})  
[*Deep Generative Models for Highly Structured Data*]({{ site.data.links.dgmsd_url }}) [*(International Conference on Learning Representations 2019)*]({{ site.data.links.iclr2019_url | prepend: site.data.links.iclr_url }})  

### [**VideoFlow: A Flow-Based Generative Model for Video**](https://arxiv.org/abs/1903.01434)  
[Manoj&nbsp;Kumar]({{ site.data.links.mechcoder_url }}), [Mohammad&nbsp;Babaeizadeh]({{ site.data.links.mbz_url }}), [Dumitru&nbsp;Erhan]({{ site.data.links.dumi_url }}), [Chelsea&nbsp;Finn]({{ site.data.links.cbfinn_url }}), [Sergey&nbsp;Levine]({{ site.data.links.slevine_url }}), Laurent&nbsp;Dinh, [Durk&nbsp;Kingma]({{ site.data.links.durk_url }})  
[*Workshop on Invertible Neural Nets and Normalizing Flows*]({{ site.data.links.innf2019_url }}) [*(International Conference on Machine Learning 2019)*]({{ site.data.links.icml2019_url | prepend: site.data.links.icml_url }}) *(*[*oral*](https://slideslive.com/38917904/videoflow-a-flowbased-generative-model-for-video)*)*  
[*International Conference on Learning Representations 2020*]({{ site.data.links.iclr2020_url | prepend: site.data.links.iclr_url }})  

**Conference ticket allocation via non-uniform random selection to address systemic biases**  
[Jessica&nbsp;Thompson]({{ site.data.links.tsonj_url }}), Laurent&nbsp;Dinh, [Layla&nbsp;El&nbsp;Asri]({{ site.data.links.elasri_url }}), [Nicolas&nbsp;Le&nbsp;Roux]({{ site.data.links.nlr_url }})  
[*Critiquing and Correcting Trends in Machine Learning*]({{ site.data.links.mlcrit_url }}) [*(Neural Information Processing Systems 2018)*]({{ site.data.links.neurips2018_url | prepend: site.data.links.neurips_url }}) *(spotlight)*  

### [**Reparametrization in Deep Learning**](https://goo.gl/bCqgDo)  
Laurent&nbsp;Dinh  
*PhD thesis*

### [**Learning Awareness Models**](https://arxiv.org/abs/1804.06318)  
[Brandon&nbsp;Amos]({{ site.data.links.bamos_url }}), Laurent&nbsp;Dinh, [Serkan&nbsp;Cabi]({{ site.data.links.serkan_url }}), [Thomas&nbsp;Rothörl]({{ site.data.links.rothoerl_url }}), [Sergio&nbsp;Gómez&nbsp;Colmenarejo]({{ site.data.links.colmenarejo_url }}), [Alistair&nbsp;Muldal]({{ site.data.links.muldal_url }}), [Tom&nbsp;Erez]({{ site.data.links.ereztom_url }}), [Yuval&nbsp;Tassa]({{ site.data.links.tassa_url }}), [Nando&nbsp;De&nbsp;Freitas]({{ site.data.links.nando_url }}), [Misha&nbsp;Denil]({{ site.data.links.misha_url }})  
[*International Conference on Learning Representations 2018*]({{ site.data.links.iclr2018_url | prepend: site.data.links.iclr_url }}) *(conference track)*  

### [**Sharp Minima Can Generalize For Deep Nets**](https://arxiv.org/abs/1703.04933)  
Laurent&nbsp;Dinh, [Razvan&nbsp;Pascanu]({{ site.data.links.razvan_url }}), [Samy&nbsp;Bengio]({{ site.data.links.samy_url }}), [Yoshua&nbsp;Bengio]({{ site.data.links.yoshua_url }})  
[*International Conference on Machine Learning 2017*]({{ site.data.links.icml2017_url | prepend: site.data.links.icml_url }})

### [**Density estimation using Real NVP**](http://arxiv.org/abs/1605.08803)  
Laurent&nbsp;Dinh, [Jascha&nbsp;Sohl-Dickstein]({{ site.data.links.jascha_url }}), [Samy&nbsp;Bengio]({{ site.data.links.samy_url }})  
[*Deep Learning Symposium*]({{ site.data.links.neurips2016_dl_url }}) [*(Neural Information Processing Systems 2016)*]({{ site.data.links.neurips2016_url | prepend: site.data.links.neurips_url }}) *(oral)*  
[*International Conference on Learning Representations 2017*]({{ site.data.links.iclr2017_url | prepend: site.data.links.iclr_url }}) *(conference track)*

**Deep independence network analysis of structural brain imaging: A simulation study**  
[Eduardo Castro]({{ site.data.links.edcastro_url }}), [Devon Hjelm]({{ site.data.links.devon_url }}), [Sergey Plis]({{ site.data.links.plis_url }}), Laurent Dinh, [Jessica Turner]({{ site.data.links.jturner_url }}), [Vince Calhoun](http://www.mrn.org/people/http-www.mrn.org-people-vince-calhoun-principal-investigators/principal-investigators)  
[*IEEE 25th International Workshop on Machine Learning for Signal Processing 2015*]({{ site.data.links.mlsp2015_url }})

### [**A Recurrent Latent Variable Model for Sequential Data**](http://arxiv.org/abs/1506.02216)  
[Junyoung&nbsp;Chung]({{ site.data.links.jchung_url }}), [Kyle&nbsp;Kastner]({{ site.data.links.kkastner_url }}), Laurent&nbsp;Dinh, [Kratarth&nbsp;Goel]({{ site.data.links.kgoel_url }}), [Aaron&nbsp;Courville]({{ site.data.links.courville_url }}), [Yoshua&nbsp;Bengio]({{ site.data.links.yoshua_url }})  
[*Neural Information Processing Systems 2015*]({{ site.data.links.neurips2015_url | prepend: site.data.links.neurips_url }})

### [**NICE: Non-linear Independent Components Estimation**](http://arxiv.org/abs/1410.8516)  
Laurent&nbsp;Dinh, [David&nbsp;Krueger]({{ site.data.links.dsk_url }}), [Yoshua&nbsp;Bengio]({{ site.data.links.yoshua_url }})  
[*International Conference on Learning Representations 2015*]({{ site.data.links.iclr2015_url | prepend: site.data.links.iclr_url }}) *(workshop track)*

### [**Techniques for Learning Binary Stochastic Feedforward Neural Networks**](http://arxiv.org/abs/1406.2989)  
[Tapani&nbsp;Raiko]({{ site.data.links.traiko_url }}), [Mathias&nbsp;Berglund]({{ site.data.links.mathias_url }}), [Guillaume&nbsp;Alain]({{ site.data.links.mila_url }}/en/person/guillaume-alain-2/), Laurent&nbsp;Dinh  
[*International Conference on Learning Representations 2015*]({{ site.data.links.iclr2015_url | prepend: site.data.links.iclr_url }}) *(conference track)*

### [**Predicting Parameters in Deep Learning**](http://arxiv.org/abs/1306.0543)  
[Misha&nbsp;Denil]({{ site.data.links.misha_url }}), Babak&nbsp;Shakibi, Laurent&nbsp;Dinh, [Marc'Aurelio&nbsp;Ranzato]({{ site.data.links.ranzato_url }}), [Nando&nbsp;De&nbsp;Freitas]({{ site.data.links.nando_url }})  
[*Neural Information Processing Systems 2013*](https://nips.cc/Conferences/2013)

## **Talks**
### [**Invertible Models and Normalizing Flows: A Retrospective Talk**](https://docs.google.com/presentation/d/1H2ICaHt77lrDPenbusDXJCRfvmGbIqs-8PjIZ8gap9I/view)  
- [*International Conference on Learning Representations 2020*]({{ site.data.links.iclr2020_url | prepend: site.data.links.iclr_url }}) ([*keynote*]({{ "virtual_2020/speaker_4.html" | prepend: site.data.links.iclr_url }}))

### [**Primer on Normalizing Flows**](https://bit.ly/3hdbtcM)  
- [*Massachusetts Institute of Technology*]({{ site.data.links.mit_url }}) ([*Computer Science and Artificial Intelligence Lab*]({{ site.data.links.csail_url }})) (*invited&nbsp;talk*)  
- *[From Passive to Active: Generative and Reinforcement Learning with Physics]({{ site.data.links.ipam_gen_phy_url }})*  [*(Machine Learning for Physics and the Physics of Learning)*]({{ site.data.links.ipam_ml_phy_url }}) ([*invited&nbsp;talk*](https://fast.wistia.net/embed/iframe/9aye5zcg8j))  
- [*Mila*]({{ site.data.links.mila_url }}) ([*invited&nbsp;talk*](https://bluejeans.com/playback/s/oRE5gP8kuhmh3dPFPPfa6hYd43CVYm5mUtVOmmFGkUuBMUNME7tKUf0Di3lz7J7F))

### [**A RAD approach to deep mixture models**](https://bit.ly/3hdR9YD)  
- [*Stanford University*]({{ site.data.links.stanford_url }}) ([*Computer Science Department*]({{ site.data.links.cs_stanford_url }})) (*invited&nbsp;talk*)  
- [*McGill University*]({{ site.data.links.mcgill_url }}) ([*Computer Science Department*]({{ site.data.links.cs_mcgill_url }})) (*invited&nbsp;talk*)  
- [*Mila*]({{ site.data.links.mila_url }}) (*invited&nbsp;talk*)

### [**Building a Tractable Generator Network**](https://bit.ly/3rniUmn)  
- [*Workshop on Invertible Neural Nets and Normalizing Flows*]({{ site.data.links.innf2019_url }})  [*(International Conference on Machine Learning 2019)*]({{ site.data.links.icml2019_url | prepend: site.data.links.icml_url }}) ([*invited&nbsp;talk*](https://slideslive.com/38917898/building-a-tractable-generator-network))

**Conference ticket allocation via non-uniform random selection to address systemic biases**  
- [*Critiquing and Correcting Trends in Machine Learning*]({{ site.data.links.mlcrit_url }}) [*(Neural Information Processing Systems 2018)*]({{ site.data.links.neurips2018_url | prepend: site.data.links.neurips_url }}) *(spotlight)*  

### [**Reparametrization in Deep Learning**](https://goo.gl/Nb2rSS)  
- [*Mila*]({{ site.data.links.mila_url }}) / [*Université de Montréal*]({{ site.data.links.diro_url }}) (*PhD defense*)  
- [*University of California, Berkeley*]({{ site.data.links.berkeley_url }}) ([*BAIR lab*]({{ site.data.links.bair_url }}))  (*invited&nbsp;talk*)  
- [*NVIDIA AI*]({{ site.data.links.nvidia_ai_url }}) (*invited&nbsp;talk*)  
- [*Facebook AI Research*]({{ site.data.links.fair_url }}) (*invited&nbsp;talk*)  
- [*Google Brain*]({{ site.data.links.brain_url }}) (*invited&nbsp;talk*)  

### [**Sharp Minima Can Generalize For Deep Nets**](http://goo.gl/Be2jmo)  
- [*International Conference on Machine Learning 2017*]({{ site.data.links.icml2017_url | prepend: site.data.links.icml_url }}) ([*contributed talk*](https://vimeo.com/237275513))
- [*Mila*]({{ site.data.links.mila_url }}) (*tea&nbsp;talk*)

### [**Density estimation using Real NVP**](https://docs.google.com/presentation/d/152NyIZYDRlYuml5DbBONchJYA7AAwlti5gTWW1eXlLM/view)  
- [*Deep Learning Symposium*]({{ site.data.links.neurips2016_dl_url }}) [*(Neural Information Processing Systems 2016)*]({{ site.data.links.neurips2016_url | prepend: site.data.links.neurips_url }}) ([*invited&nbsp;talk*](https://channel9.msdn.com/Events/Neural-Information-Processing-Systems-Conference/Neural-Information-Processing-Systems-Conference-NIPS-2016/Deep-Learning-Symposium-Session-1))  
- [*OpenAI*]({{ site.data.links.openai_url }}) (*invited&nbsp;talk*)  
- [*Twitter*]({{ site.data.links.twitter_url }}) ([*Cortex team*]({{ site.data.links.cortex_url }})) ([*invited&nbsp;talk*](https://www.periscope.tv/w/1ypKdAVmbEpGW))
- [*Mila*]({{ site.data.links.mila_url }}) (*tea&nbsp;talk*)

### [**NICE: Non-linear Independent Components Estimation**](https://docs.google.com/presentation/d/1Q8pFPQD-p9Zxv8AfmLBe2PyWqStOCM3bjFrCZb7hHAo/view)  
- [*University of California, Berkeley*]({{ site.data.links.berkeley_url }}) ([*Redwood Center For Theoretical Neuroscience*]({{ site.data.links.redwood_url }})) ([*invited&nbsp;talk*](https://archive.org/details/Redwood_Center_2015_10_14_Laurent_Dinh))
- [*Mila*]({{ site.data.links.mila_url }}) (*tea&nbsp;talk*)

### [**Training Neural Bayesian Nets**](https://drive.google.com/file/d/1lh98Cm_nxP9nvSOPxhrMCmLb2gucSzAc/view?usp=sharing)  
- [*CIFAR Deep Learning Summer School 2014*]({{ site.data.links.dlrl_url }}) (*contributed&nbsp;talk*)



## **Academic Service**
**Diversity and Inclusion Chair**  
- [*Montréal Artificial Intelligence Symposium*]({{ site.data.links.mais_url }})  

**Area Chair**  
- [*Neural Information Processing Systems*]({{ site.data.links.neurips_url }})  
- [*International Conference on Learning Representations*]({{ site.data.links.iclr_url }})  

**Action Editor**
- [*Transactions on Machine Learning Research*]({{ site.data.links.tmlr_url }})

**Reviewer**  
- [*International Conference on Machine Learning*]({{ site.data.links.icml_url }})  
- [*Neural Information Processing Systems*]({{ site.data.links.neurips_url }})  
- [*International Conference on Learning Representations*]({{ site.data.links.iclr_url }})  
- [*International Conference on Artificial Intelligence and Statistics*]({{ site.data.links.aistats_url }})  
- [*IEEE Transactions on Pattern Analysis and Machine Intelligence*]({{ site.data.links.tpami_url }})  
- [*Journal of Machine Learning Research*]({{ site.data.links.jmlr_url }})

**Panelist**  
- [*I Can't Believe It's Not Better! Workshop*]({{ site.data.links.icbinb_url }}) [*(Neural Information Processing Systems 2020)*]({{ site.data.links.neurips2020_url | prepend: site.data.links.neurips_url }})  
- [*ML Retrospectives*]({{ site.data.links.ml_retro_url }}) [*(International Conference on Machine Learning 2020)*]({{ site.data.links.icml_url }}Conferences/2020)  
- [*Deep Learning Symposium*]({{ site.data.links.neurips2016_dl_url }}) [*(Neural Information Processing Systems 2016)*]({{ site.data.links.neurips2016_url | prepend: site.data.links.neurips_url }})  

**Mentor**  
- [*Women in Machine Learning Workshop*]({{ site.data.links.wiml2020_url }}) [*(Neural Information Processing Systems 2020)*]({{ site.data.links.neurips2020_url | prepend: site.data.links.neurips_url }})  
- [*ML Collective Social on Open Collaboration in ML Research*]({{ site.data.links.mlc2020_url }}) [*(Neural Information Processing Systems 2020)*]({{ site.data.links.neurips2020_url | prepend: site.data.links.neurips_url }})  
- [*Eastern European Machine Learning Summer School 2020*]({{ site.data.links.eeml_url }})  

**Lecturer**  
- [*Depth First Learning*]({{ site.data.links.d1stl_url }}) [*Fellowship*]({{ site.data.links.d1stl_url }}2019/Announcing-DFL-Fellows) [*on Normalizing Flows with Variational Inference*]({{ site.data.links.d1stl_nfvi }})  
- *Deep learning Minicourse 2015* ([*Instituto Nokia de Tecnologia*](https://en.wikipedia.org/wiki/Instituto_de_Desenvolvimento_Tecnol%C3%B3gico))

<hr/>
<br/>