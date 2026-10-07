---
page_id: projects
layout: page
title: projects
permalink: /projects/
description: Things I have designed, built and shipped. Most of them I still use every day.
nav: true
nav_order: 3
display_categories: [productivity, uni, fun]
category_titles:
  productivity: Tools
  uni: University
  fun: Experiments
---

<div class="projects-index">
{% for category in page.display_categories %}
  {% assign in_category = site.projects | where: "category", category | sort: "year" | reverse %}
  {% if in_category.size > 0 %}
  <section class="index-section" id="{{ category }}">
    <header class="section-head">
      <h2>{{ page.category_titles[category] | default: category }}</h2>
      <span class="section-count">{{ in_category.size }}</span>
    </header>
    <ol class="project-index">
      {% for project in in_category %}
        {% include project_row.liquid project=project number=forloop.index %}
      {% endfor %}
    </ol>
  </section>
  {% endif %}
{% endfor %}
</div>
