---
layout: page
title: Thesis by Blogpost
linkname: Blog
permalink: /blog/
---


<style type="text/css">
.post, .post-container {
  max-width: calc(512px + 180px);
  min-height: 25em;
  margin-right: auto;
}

@media screen and (min-width:769px) {
  .post, .post-container {
    padding-left: 180px;
  }
}

@media(max-width:768px) {
  .post, .post-container {
    margin-left: auto;
    max-width: 512px;
  }
}
</style>

{% for post in site.posts %}
<div class ="post-preview">
  <span class="post-title">
    <a class="post-link" href="{{ post.url | prepend: site.baseurl }}">
      {{ post.title }}
    </a>
  </span>

  <span class="post-time">
    <p>{{ post.date | date: "%b %-d, %Y" }}</p>
  </span>


</div>

{% endfor %}