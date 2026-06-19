const DEFAULT_HTML = `Hello <span class="secret-text" style="display: none;">Secret Hidden Text</span> <br> Welcome!`;

const targetElement = document.getElementById('target-element');
const toggleCssBtn = document.getElementById('toggle-css-btn');
const resetBtn = document.getElementById('reset-btn');

// Output elements
const outHtml = document.getElementById('output-innerhtml');
const outText = document.getElementById('output-innertext');
const outContent = document.getElementById('output-textcontent');

// Input elements
const inHtml = document.getElementById('input-innerhtml');
const inText = document.getElementById('input-innertext');
const inContent = document.getElementById('input-textcontent');

let cssHidden = true;

// Helper to escape HTML for display
function escapeHtml(unsafe) {
    if (!unsafe) return "(empty)";
    return unsafe
         .replace(/&/g, "&amp;")
         .replace(/</g, "&lt;")
         .replace(/>/g, "&gt;")
         .replace(/"/g, "&quot;")
         .replace(/'/g, "&#039;");
}

// Format the output specifically for text properties that might have newlines
function formatOutput(str) {
    if (!str) return "(empty)";
    return escapeHtml(str).replace(/\n/g, '<br>');
}

// Update all "GET" sections
function updateOutputs() {
    outHtml.innerHTML = escapeHtml(targetElement.innerHTML);
    outText.innerHTML = formatOutput(targetElement.innerText);
    outContent.innerHTML = formatOutput(targetElement.textContent);
    
    // Add brief animation class to trigger flash effect
    document.querySelectorAll('.io-section pre').forEach(el => {
        el.classList.remove('value-updated');
        void el.offsetWidth; // trigger reflow
        el.classList.add('value-updated');
    });
}

// Function triggered by "Apply" buttons
window.setProp = function(propName) {
    if (propName === 'innerHTML') {
        targetElement.innerHTML = inHtml.value;
    } else if (propName === 'innerText') {
        targetElement.innerText = inText.value;
    } else if (propName === 'textContent') {
        targetElement.textContent = inContent.value;
    }
    
    // Update the displays
    updateOutputs();
};

// Event Listeners for top buttons
toggleCssBtn.addEventListener('click', () => {
    // Find the secret text span and toggle its display
    const secretSpan = targetElement.querySelector('.secret-text');
    if (secretSpan) {
        cssHidden = !cssHidden;
        secretSpan.style.display = cssHidden ? 'none' : 'inline-block';
        toggleCssBtn.textContent = cssHidden ? "Show Hidden Text" : "Hide Text Again";
        updateOutputs();
    } else {
        alert("The secret span element has been removed! Reset the HTML to try toggling again.");
    }
});

resetBtn.addEventListener('click', () => {
    targetElement.innerHTML = DEFAULT_HTML;
    cssHidden = true;
    toggleCssBtn.textContent = "Show Hidden Text";
    // Clear text areas
    inHtml.value = `Testing <strong>HTML</strong> injection!`;
    inText.value = `Testing <strong>Text</strong> injection!`;
    inContent.value = `Testing <strong>Content</strong> injection!`;
    updateOutputs();
});

// Setup initial state
inHtml.value = `Testing <strong>HTML</strong> injection!`;
inText.value = `Testing <strong>Text</strong> injection!`;
inContent.value = `Testing <strong>Content</strong> injection!`;
updateOutputs();

// Add a real-time observer so if text changes, it highlights the new reads
const observer = new MutationObserver((mutations) => {
    updateOutputs();
});
observer.observe(targetElement, { characterData: true, childList: true, subtree: true, attributes: true });
