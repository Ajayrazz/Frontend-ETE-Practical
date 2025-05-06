document.addEventListener('DOMContentLoaded', () => {
    const generateBtn = document.getElementById('generateBtn');
    const tableContainer = document.getElementById('tableContainer');
  
    generateBtn.addEventListener('click', () => {
      const rows = parseInt(document.getElementById('rowsInput').value);
      const cols = parseInt(document.getElementById('colsInput').value);
  
      if (isNaN(rows) || isNaN(cols) || rows <= 0 || cols <= 0) {
        alert('Please enter valid positive numbers for rows and columns.');
        return;
      }
  
      // Clear any existing table
      tableContainer.innerHTML = '';
  
      // Create a table element
      const table = document.createElement('table');
  
      // Fill the table
      for (let i = 0; i < rows; i++) {
        const tr = document.createElement('tr');
  
        for (let j = 0; j < cols; j++) {
          const td = document.createElement('td');
          td.textContent = `Row ${i+1} Col ${j+1}`;
          tr.appendChild(td);
        }
  
        table.appendChild(tr);
      }
  
      // Add the table to the page
      tableContainer.appendChild(table);
    });
  });
  