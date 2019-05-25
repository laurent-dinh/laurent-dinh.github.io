---
layout: page
title: About
permalink: /
---

{::nomarkdown}
<style type="text/css">
.post, .post-container {
  max-width: calc(512px + 180px);
  margin-right: auto;
}

@media(min-width:768px) {
  .post, .post-container {
    padding-left: 180px;
  }
}


@media(max-width:768px) {
  .post, .post-container {
    margin-left: auto;
  }
}
</style>

<script type="text/javascript">
var logo_elem = document.getElementById("logo_sign");
var last_frame_time = new Date().getTime();
var can_draw = true;
var can_cpress = true;

function preloadImageLD(url)
{
    var img=new Image();
    img.src=url;
}

function preloadframes()
{
  for (i = 0; i <= 100; i+=2) {
      if (i % 4 == 0) {
        preloadImageLD('{{ site.baseurl }}/img/logo_frames/logo_cpress_' + ("000" + i).slice(-3) + '.png');
      }
      preloadImageLD('{{ site.baseurl }}/img/logo_frames/logo_draw_' + ("000" + i).slice(-3) + '.png');
  }
}

var draw_id = 0;
preloadframes();

function animate_draw()
{
  if (can_draw && draw_id <= 100 && new Date().getTime() > last_frame_time + (20)) {
    last_frame_time = new Date().getTime();
    draw_id += 2;
    draw_id = Math.min(100, draw_id);
    logo_elem.style.backgroundImage='url({{ site.baseurl }}/img/logo_frames/logo_draw_' + ("000" + draw_id).slice(-3) + '.png)';
  }
  else if (can_draw && draw_id >= 100) {
    can_draw = false;
    draw_id = 100;
  }
  requestAnimationFrame(animate_draw);
}

function animate_cpress()
{
  if (can_cpress && draw_id >= 0 && new Date().getTime() > last_frame_time + (20)) {
    last_frame_time = new Date().getTime();
    draw_id -= 4;
    draw_id = Math.max(0, draw_id);
    draw_id -= draw_id % 4;
    logo_elem.style.backgroundImage='url({{ site.baseurl }}/img/logo_frames/logo_cpress_' + ("000" + (100 - draw_id)).slice(-3) + '.png)';
  }
  else if (can_cpress && draw_id <= 0) {
    can_cpress = false;
    draw_id = 0;
  }
  requestAnimationFrame(animate_cpress);
}

</script>

{:/nomarkdown}

### Laurent Dinh
I am a research scientist at [Google Brain](http://g.co/brain) (Montréal,&nbsp;Canada). The focus of my work is currently deep generative models, geometry, probabilistic modeling, generalization and optimization. 

I obtained my PhD in deep learning at [Mila](http://mila.quebec/) (Montréal,&nbsp;Canada), under the supervision of [Yoshua Bengio](http://www.iro.umontreal.ca/~bengioy/yoshua_en/). Prior to that I was studying at [ECP](http://www.ecp.fr) (Paris,&nbsp;France) in [applied mathematics](http://www.centralesupelec.fr/fr/cursus-ingenieur-centralien?tab=options-filieres-3e-annee#option-mathematiques-appliquees) and at [ENS Cachan](http://www.ens-cachan.fr/) in [machine learning and computer vision](http://www.cmla.ens-cachan.fr/version-anglaise/academics/mva-master-degree-227777.kjsp). I had the privilege to work as an intern in the machine learning group led by [Nando de Freitas](http://www.cs.ox.ac.uk/people/nando.defreitas/) both at [UBC](https://www.cs.ubc.ca/) (Vancouver,&nbsp;Canada) and [DeepMind](http://deepmind.com/) (London,&nbsp;United Kingdom), and also at [Google Brain](https://research.google.com/teams/brain/) (Mountain&nbsp;View,&nbsp;US), under the supervision of [Samy Bengio](http://bengio.abracadoudou.com/).

Most of my publications and reports can be found [here](https://scholar.google.ca/citations?user=h7OHSkoAAAAJ).

<div
style="float: right; height: 35px; width:83px; background-image: url('{{ site.baseurl }}/img/logo_static.png'); background-size: contain; transition: background-image .000001s ease-in-out;" id="logo_sign"
onmouseenter="preloadframes(); var logo_elem = document.getElementById('logo_sign'); animate_draw(this); can_draw=true;" 
ontouchstart="preloadframes(); animate_draw(this); can_draw=true;" 
onmouseleave="preloadframes(); animate_cpress(this); can_cpress=true;" 
ontouchend="preloadframes(); animate_cpress(this); can_cpress=true;" 
ontouchcancel="preloadframes(); animate_cpress(this); can_cpress=true;"></div>

<script type="text/javascript">
var logo_elem = document.getElementById("logo_sign");
var last_frame_time = new Date().getTime();
var can_draw = false;
var can_cpress = false;
</script>