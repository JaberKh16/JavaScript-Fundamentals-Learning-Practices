 function generatePattern(N, T) {
        if (N < 1 || N > 26) {
          return "N must be between 1 and 26\n";
        }

        if (T !== "a" && T !== "1") {
          return 'T must be either "a" or "1"\n';
        }

        let output = "";

        // Generate character pattern
        if (T === "a") {
          const charCodeA = "A".charCodeAt(0);
          for (let i = 0; i < N; i++) {
            let row = "";
            for (let j = 0; j < N; j++) {
              if (i === 0 || i === N - 1) {
                row += String.fromCharCode(charCodeA + j) + " ";
              } else if (j === 0 || j === N - 1) {
                row += String.fromCharCode(charCodeA + i) + " ";
              } else {
                row += "  ";
              }
            }
            output += row.trim() + "\n";
          }
        }

        // Generate number pattern
        if (T === "1") {
          for (let i = 1; i <= N; i++) {
            let row = "";
            for (let j = 1; j <= N; j++) {
              if (i === 1 || i === N) {
                row += j + " ";
              } else if (j === 1 || j === N) {
                row += i + " ";
              } else {
                row += "  ";
              }
            }
            output += row.trim() + "\n";
          }
        }

        return output;
      }

      function generatePatternFromInput() {
        const numberInput = document.getElementById("numberInput").value;
        const typeInput = document.getElementById("typeInput").value;
        const patternOutput = document.getElementById("patternOutput");

        const N = parseInt(numberInput);
        const T = typeInput.trim();

        const pattern = generatePattern(N, T);
        patternOutput.textContent = pattern;
      }