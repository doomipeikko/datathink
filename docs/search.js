// Load and parse the XML file
const parser = new DOMParser();
const xmlString = `<elements>
  <element>
    <symbol>H</symbol>
    <name>Hydrogen</name>
    <atomic_number>1</atomic_number>
    <atomic_mass>1.008</atomic_mass>
    <phase>gas</phase>
  </element>
  <!-- Add more element entries here -->
</elements>`;
const xmlDoc = parser.parseFromString(xmlString, "data/elements.xml"); // Replace with the path to your XML file

const form = document.getElementById('elementSearchForm');
const searchInput = document.getElementById('searchInput');
const resultDiv = document.getElementById('result');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    const searchValue = searchInput.value.trim().toLowerCase();
    const elements = xmlDoc.getElementsByTagName('element');

    for (let i = 0; i < elements.length; i++) {
        const symbol = elements[i].getElementsByTagName('symbol')[0].textContent.toLowerCase();
        const name = elements[i].getElementsByTagName('name')[0].textContent.toLowerCase();

        if (symbol === searchValue || name === searchValue) {
            // Match found, display the entry
            const atomicNumber = elements[i].getElementsByTagName('atomic_number')[0].textContent;
            const atomicMass = elements[i].getElementsByTagName('atomic_mass')[0].textContent;
            const phase = elements[i].getElementsByTagName('phase')[0].textContent;

            const resultMessage = `
                Element found:
                Symbol: ${symbol}
                Name: ${name}
                Atomic Number: ${atomicNumber}
                Atomic Mass: ${atomicMass}
                Phase: ${phase}
            `;
            resultDiv.textContent = resultMessage;
            return;
        }
    }

    // No match found, display an error message
    resultDiv.textContent = 'Element not found.';
});

