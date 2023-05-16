<template>
  <div class="cloud-scope my-4">

    <ul class="cloud" role="navigation" aria-label="Webdev word cloud">
      <li><a href="#" data-weight="7">VueJS</a></li>
      <li><a href="#" data-weight="6">NuxtJS</a></li>
      <li><a href="#" data-weight="4">HTTP</a></li>
      <li><a href="#" data-weight="6">PHP</a></li>
      <li><a href="#" data-weight="4">Laravel</a></li>
      <li><a href="#" data-weight="5">MySQL</a></li>
      <li><a href="#" data-weight="3">Sass</a></li>
      <li><a href="#" data-weight="4">HTML</a></li>
      <li><a href="#" data-weight="6">Bootstrap</a></li>
      <li><a href="#" data-weight="4">REST API</a></li>
      <li><a href="#" data-weight="4">Linux</a></li>
      <li><a href="#" data-weight="2">VPS / VDS</a></li>
      <li><a href="#" data-weight="6">JavaScript</a></li>
      <li><a href="#" data-weight="6">Windows</a></li>
      <li><a href="#" data-weight="4">Electron</a></li>
      <li><a href="#" data-weight="3">CSS</a></li>
      <li><a href="#" data-weight="2">Express</a></li>
      <li><a href="#" data-weight="2">Docker</a></li>
    </ul>
  </div>

</template>

<style scoped>
.cloud-scope {
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

ul.cloud {
  list-style: none;
  padding-left: 0;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  line-height: 2.75rem;
  width: 450px;
}

ul.cloud a {
  /*
  Not supported by any browser at the moment :(
  --size: attr(data-weight number);
  */
  --size: 4;
  --color: #a33;
  color: var(--color);
  font-size: calc(var(--size) * 0.25rem + 0.5rem);
  display: block;
  padding: 0.125rem 0.25rem;
  position: relative;
  text-decoration: none;
  /*
  For different tones of a single color
  opacity: calc((15 - (9 - var(--size))) / 15);
  */
}

ul.cloud a[data-weight="1"] { --size: 1; }
ul.cloud a[data-weight="2"] { --size: 2; }
ul.cloud a[data-weight="3"] { --size: 3; }
ul.cloud a[data-weight="4"] { --size: 4; }
ul.cloud a[data-weight="5"] { --size: 6; }
ul.cloud a[data-weight="6"] { --size: 8; }
ul.cloud a[data-weight="7"] { --size: 10; }
ul.cloud a[data-weight="8"] { --size: 13; }
ul.cloud a[data-weight="9"] { --size: 16; }

ul[data-show-value] a::after {
  content: " (" attr(data-weight) ")";
  font-size: 1rem;
}

ul.cloud li:nth-child(2n+1) a { --color: #181; }
ul.cloud li:nth-child(3n+1) a { --color: #33a; }
ul.cloud li:nth-child(4n+1) a { --color: #c38; }

ul.cloud a:focus {
  outline: 1px dashed;
}

ul.cloud a::before {
  content: "";
  position: absolute;
  top: 0;
  left: 50%;
  width: 0;
  height: 100%;
  background: var(--color);
  transform: translate(-50%, 0);
  opacity: 0.15;
  transition: width 0.25s;
}

ul.cloud a:focus::before,
ul.cloud a:hover::before {
  width: 100%;
}

@media (prefers-reduced-motion) {
  ul.cloud * {
    transition: none !important;
  }
}
</style>
