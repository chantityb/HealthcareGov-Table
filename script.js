let myArray = [];

$.ajax({
  method: 'GET',
  url: 'https://healthdata.gov/resource/7ctx-gtb7.json?state=KY',
  success: function (res) {
    myArray = res;
    createTable(myArray);
    console.log(myArray);
  },
});

function createTable(data) {
  let table = document.getElementById('myTable');

  for (let i = 0; i < data.length; i++) {
    let row = `<tr>
                            <td>${data[i].state}</td>
                            <td>${dayjs(data[i].collection_date).format(
                              'MMM DD, YYYY'
                            )}</td>
                            <td>${data[i].total_staffed_adult_icu_beds}</td>
                        </tr>`;
    table.innerHTML += row;
  }
}

$(document).ready(function () {
  $('#sortTable').tablesort();
});
