
const excelFilePath = './data.xlsx';

        fetch(excelFilePath)
            .then(response => response.arrayBuffer())
            .then(data => {
                const workbook = XLSX.read(data, { type: 'array' });

                // Get the first sheet name
                const sheetName = workbook.SheetNames[0];

                // Get the sheet data
                const sheet = workbook.Sheets[sheetName];

                // Convert the sheet data to JSON
                const jsonData = XLSX.utils.sheet_to_json(sheet);

                // Output the JSON data
                const exceldata = JSON.stringify(jsonData, null, 2);
                console.log(exceldata);

                // Parse the JSON string to an array
                const dataArray = JSON.parse(exceldata);

                // const dataArray = dataArray1.slice(1);

                // Get the table body element
                const tableBody = document.querySelector('#tabledata tbody');

                // Map through the data and create table rows
                dataArray.map((ele,i) => {
                    const table_row = document.createElement('tr');
                    const table_data1 = document.createElement('td');
                    if(i===0){
                        table_data1.textContent = "Sl.NO";
                    }else{
                        table_data1.textContent = i;
                    }
                    table_row.appendChild(table_data1);
                    const table_data2 = document.createElement('td');
                    table_data2.textContent = ele.__EMPTY;
                    table_row.appendChild(table_data2);
                    const table_data3 = document.createElement('td');
                    table_data3.textContent = ele.__EMPTY_1;
                    table_row.appendChild(table_data3);
                    const table_data4 = document.createElement('td');
                    table_data4.textContent = ele.__EMPTY_2;
                    table_row.appendChild(table_data4);
                    const table_data5= document.createElement('td');
                    table_data5.textContent = ele.__EMPTY_3;
                    table_row.appendChild(table_data5);
                    const table_data6 = document.createElement('td');
                    table_data6.textContent = ele.__EMPTY_4;
                    table_row.appendChild(table_data6);
                    const table_data7 = document.createElement('td');
                    table_data7.textContent = ele.__EMPTY_5;
                    table_row.appendChild(table_data7);
                    const table_data8 = document.createElement('td');
                    table_data8.textContent = ele.__EMPTY_6;
                    table_row.appendChild(table_data8);
                    const table_data9 = document.createElement('td');
                    table_data9.textContent = ele.__EMPTY_7;
                    table_row.appendChild(table_data9);
                        
                    

                    // Append the row to the table body
                    tableBody.appendChild(table_row);
                });
            })
            .catch(error => console.error('Error fetching the Excel file:', error));