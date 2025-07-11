```{=html}
<ul>
<% for (const item of items) { %>
  <li>
    <a href="<%- item.url %>" class="listing-name"><%= item.name %></a><br/>
    <span class="listing-description"><%= item.description %></span>
  </li>
  <br/>
<% } %>
</ul>
```