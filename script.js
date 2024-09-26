function printWithDots(element, statement, delay = 87, dotCount = 3, nextDelay = 3000, callback) {
    const prompt = document.createElement("span");
    prompt.innerHTML = '<span class="prompt">user@machine</span>:<span class="path">~/project</span> <span class="branch">(master)</span> $ ';

    const statementElement = document.createElement("div");
    statementElement.appendChild(prompt);
    statementElement.appendChild(document.createTextNode(statement));
    element.appendChild(statementElement);

    let dotIndex = 0;
    const dotsElement = document.createElement("span");
    statementElement.appendChild(dotsElement);

    //. > .. > ... > (no dots)
    let dotInterval = setInterval(() => {
        let dots = ".".repeat(dotIndex % (dotCount + 1));
        dotsElement.textContent = dots.padEnd(dotCount, "") + "|"; // cursor
        dotIndex++;
    }, delay);

    setTimeout(() => {
        clearInterval(dotInterval);
        dotsElement.textContent = "...";
        const successMessage = document.createElement("div");
        successMessage.textContent = "Successfully completed step: " + statement;
        element.appendChild(successMessage);

        // Auto-scroll to bottom whenever a new command is printed
        element.scrollTop = element.scrollHeight;

        if (callback) {
            callback();
        }
    }, nextDelay);
}

function getRandomDelay(min = 1000, max = 1200) {
    return Math.random() * (max - min) + min;
}

function processStatements(statements) {
    const cliElement = document.getElementById("cli");

    function processNext(index) {
        if (index >= statements.length) {
            // displays the final prompt with blinking cursor
            const finalPrompt = document.createElement("div");
            finalPrompt.innerHTML = '<span class="prompt">user@machine</span>:<span class="path">~/project</span> <span class="branch">(master)</span> $ <span class="blinking-cursor">|</span>';
            cliElement.appendChild(finalPrompt);
            cliElement.scrollTop = cliElement.scrollHeight; // Ensures final prompt is visible
            return;
        }
        let randomDelay = getRandomDelay();
        printWithDots(cliElement, statements[index], 87, 3, randomDelay, () => {
            processNext(index + 1);
        });
    }
    processNext(0);
}

const statements = [
    "Statement 1",
    "Statement 2",
    "Statement 3",
    "Statement 4",
    "Statement 5",
    "Statement 6",
    "Statement 7",
    "Statement 8",
    "Statement 9",
    "Statement 10",
    "Statement 11",
    "Statement 12",
    "Statement 13",
    "Statement 14",
    "Statement 15",
    "Statement 1",
    "Statement 2",
    "Statement 3",
    "Statement 4",
    "Statement 5",
    "Statement 6",
    "Statement 7",
    "Statement 8",
    "Statement 9",
    "Statement 10",
    "Statement 11",
    "Statement 12",
    "Statement 13",
    "Statement 14",
    "Statement 15",
];
processStatements(statements);