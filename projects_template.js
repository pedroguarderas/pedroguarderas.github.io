```{=html}
<ul>
<% for (const item of items) { %>
  <li>
    <%= item.from %> - <%= item.until %>,<br/>
    <%= item.title %>,<br/>
    <%= item.client %>,<br/>
    <span class="listing-description"><%= item.description %></span>
  </li>
  <br/>
<% } %>
</ul>
```