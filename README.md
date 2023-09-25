<h1 id="repro" ></h1>

  <h4>explanation:</h4>
  in the repro above, the code
  <pre><code>
  const myNumber = 123465;
  const myString = myNumber.toString();
  </code></pre>

is converted to

  <pre><code>
  const myString = 123465.toString();
  </code></pre>

which is incorrect. It seems that browsers can correctly evaluate the code, but in some edge cases they fail with "Uncaught SyntaxError: Invalid or unexpected token"

  <h4>please inspect the bundled code to see the issue.</h4>
  </main>


To run
```sh
npm install
npm run build && npm run preview
```
And then inspect the build