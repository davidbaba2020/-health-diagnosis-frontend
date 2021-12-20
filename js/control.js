$(document).ready(function(){
  let checkedIdArr = [];
let apiKey = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6ImRhdmVtZWRhcGlAZ21haWwuY29tIiwicm9sZSI6IlVzZXIiLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9zaWQiOiIxMDA2NCIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvdmVyc2lvbiI6IjIwMCIsImh0dHA6Ly9leGFtcGxlLm9yZy9jbGFpbXMvbGltaXQiOiI5OTk5OTk5OTkiLCJodHRwOi8vZXhhbXBsZS5vcmcvY2xhaW1zL21lbWJlcnNoaXAiOiJQcmVtaXVtIiwiaHR0cDovL2V4YW1wbGUub3JnL2NsYWltcy9sYW5ndWFnZSI6ImVuLWdiIiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy9leHBpcmF0aW9uIjoiMjA5OS0xMi0zMSIsImh0dHA6Ly9leGFtcGxlLm9yZy9jbGFpbXMvbWVtYmVyc2hpcHN0YXJ0IjoiMjAyMS0xMi0xOSIsImlzcyI6Imh0dHBzOi8vc2FuZGJveC1hdXRoc2VydmljZS5wcmlhaWQuY2giLCJhdWQiOiJodHRwczovL2hlYWx0aHNlcnZpY2UucHJpYWlkLmNoIiwiZXhwIjoxNjM5OTIzMDU3LCJuYmYiOjE2Mzk5MTU4NTd9.iAAzH7coZVsUL_IP-9ihkQOR8rp6uTkSpZfsQQZWVEE";
let token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6ImRhdmVtZWRhcGlAZ21haWwuY29tIiwicm9sZSI6IlVzZXIiLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9zaWQiOiIxMDA2NCIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvdmVyc2lvbiI6IjIwMCIsImh0dHA6Ly9leGFtcGxlLm9yZy9jbGFpbXMvbGltaXQiOiI5OTk5OTk5OTkiLCJodHRwOi8vZXhhbXBsZS5vcmcvY2xhaW1zL21lbWJlcnNoaXAiOiJQcmVtaXVtIiwiaHR0cDovL2V4YW1wbGUub3JnL2NsYWltcy9sYW5ndWFnZSI6ImVuLWdiIiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy9leHBpcmF0aW9uIjoiMjA5OS0xMi0zMSIsImh0dHA6Ly9leGFtcGxlLm9yZy9jbGFpbXMvbWVtYmVyc2hpcHN0YXJ0IjoiMjAyMS0xMi0xOSIsImlzcyI6Imh0dHBzOi8vc2FuZGJveC1hdXRoc2VydmljZS5wcmlhaWQuY2giLCJhdWQiOiJodHRwczovL2hlYWx0aHNlcnZpY2UucHJpYWlkLmNoIiwiZXhwIjoxNjM5OTIzMDU3LCJuYmYiOjE2Mzk5MTU4NTd9.iAAzH7coZVsUL_IP-9ihkQOR8rp6uTkSpZfsQQZWVEE&format=json&language=en-gb";
let web_root = 'https://sandbox-healthservice.priaid.ch/'; 

let symptoms_url = web_root+"symptoms?token="+token;
let symptoms = [9,56];
 
  // // Send the data using post
  // let posting = $.post( url, { s: term } );
 
  //Ajax Function to send a get request
  $.ajax({
    type: "GET",
    url: symptoms_url,
    contentType: "application/json",
    // data: {"symptoms":JSON.stringify(symptoms),"gender":"male","year_of_birth": 12},
    dataType: 'jsonp',
    async:true,
    crossDomain:true,
    headers: {
        "Authorization": "Basic " + apiKey
    },
    success: function(response){
        //if request if made successfully then the response represent the data
        // alert(JSON.stringify(response));
        // alert(response.length);
        for (i in response) {
        
          if(i<=7){
            if(i==0){
              $(".page-1").append(`<div class="col-lg-6"></div>`);
              $(".page-1").append(`<div class="col-lg-6"></div>`);
            }
            
           
            if(i<4){
              
              $(".page-1 .col-lg-6:nth-of-type(1)").append(`<div class="form-check ps-0 q-box">
                                            <div class="q-box__question">
                                                <input class="form-check-input question__input q-checkbox" id="q_${i}" name="q_${i}" type="checkbox" value="${response[i].ID}"> 
                                                <label class="form-check-label question__label" for="q_${i}">${response[i].Name}</label>
                                            </div>
                                        </div>`);
            }
            if(i>=4){
              
              $(".page-1 .col-lg-6:nth-of-type(2)").append(`<div class="form-check ps-0 q-box">
                                            <div class="q-box__question">
                                                <input class="form-check-input question__input q-checkbox" id="q_${i}" name="q_${i}" type="checkbox" value="${response[i].ID}"> 
                                                <label class="form-check-label question__label" for="q_${i}">${response[i].Name}</label>
                                            </div>
                                        </div>`);
               

            }

             
            }else if(i>=8 && i<=15){

              if(i==8){
              $(".page-2").append(`<div class="col-lg-6"></div>`);
              $(".page-2").append(`<div class="col-lg-6"></div>`);
            }
            
           
            if(i<12){
              
              $(".page-2 .col-lg-6:nth-of-type(1)").append(`<div class="form-check ps-0 q-box">
                                            <div class="q-box__question">
                                                <input class="form-check-input question__input q-checkbox" id="q_${i}" name="q_${i}" type="checkbox" value="${response[i].ID}"> 
                                                <label class="form-check-label question__label" for="q_${i}">${response[i].Name}</label>
                                            </div>
                                        </div>`);
            }
            if(i>=12){
              
              $(".page-2 .col-lg-6:nth-of-type(2)").append(`<div class="form-check ps-0 q-box">
                                            <div class="q-box__question">
                                                <input class="form-check-input question__input q-checkbox" id="q_${i}" name="q_${i}" type="checkbox" value="${response[i].ID}"> 
                                                <label class="form-check-label question__label" for="q_${i}">${response[i].Name}</label>
                                            </div>
                                        </div>`);
               

            }

            }else if(i>=16 && i<=24){

              if(i==16){
              $(".page-3").append(`<div class="col-lg-6"></div>`);
              $(".page-3").append(`<div class="col-lg-6"></div>`);
            }
            
           
            if(i<20){
              
              $(".page-3 .col-lg-6:nth-of-type(1)").append(`<div class="form-check ps-0 q-box">
                                            <div class="q-box__question">
                                                <input class="form-check-input question__input q-checkbox" id="q_${i}" name="q_${i}" type="checkbox" value="${response[i].ID}"> 
                                                <label class="form-check-label question__label" for="q_${i}">${response[i].Name}</label>
                                            </div>
                                        </div>`);
            }
            if(i>=21){
              
              $(".page-3 .col-lg-6:nth-of-type(2)").append(`<div class="form-check ps-0 q-box">
                                            <div class="q-box__question">
                                                <input class="form-check-input question__input q-checkbox" id="q_${i}" name="q_${i}" type="checkbox" value="${response[i].ID}"> 
                                                <label class="form-check-label question__label" for="q_${i}">${response[i].Name}</label>
                                            </div>
                                        </div>`);
               

            }

            }else if(i>=25 && i<=32){

              if(i==25){
              $(".page-4").append(`<div class="col-lg-6"></div>`);
              $(".page-4").append(`<div class="col-lg-6"></div>`);
            }
            
           
            if(i<29){
              
              $(".page-4 .col-lg-6:nth-of-type(1)").append(`<div class="form-check ps-0 q-box">
                                            <div class="q-box__question">
                                                <input class="form-check-input question__input q-checkbox" id="q_${i}" name="q_${i}" type="checkbox" value="${response[i].ID}"> 
                                                <label class="form-check-label question__label" for="q_${i}">${response[i].Name}</label>
                                            </div>
                                        </div>`);
            }
            if(i>=29){
              
              $(".page-4 .col-lg-6:nth-of-type(2)").append(`<div class="form-check ps-0 q-box">
                                            <div class="q-box__question">
                                                <input class="form-check-input question__input q-checkbox" id="q_${i}" name="q_${i}" type="checkbox" value="${response[i].ID}"> 
                                                <label class="form-check-label question__label" for="q_${i}">${response[i].Name}</label>
                                            </div>
                                        </div>`);
               

            }

            }else if(i>=33 && i<37){
           
            
              
              $(".page-5").append(`<div class="form-check ps-0 q-box">
                                            <div class="q-box__question">
                                                <input class="form-check-input question__input q-checkbox" id="q_${i}" name="q_${i}" type="checkbox" value="${response[i].ID}"> 
                                                <label class="form-check-label question__label" for="q_${i}">${response[i].Name}</label>
                                            </div>
                                        </div>`);

            }
            if(i===37){
              break;
            }
            


            
           
          }


$(".q-box__question .q-checkbox").change(function() {
    if(this.checked) {
       
       checkedIdArr.push(this.value);
    }
});
           






          
      
        
    },
    error: function(er){
      alert(er);
    }
  });


let persons = [{"id":"PAT-234","name":"Shadrach Adamu"},{"id":"PAT-235","name":"John Mikky"}];
            
            $("#search-box").keyup(()=>{
              
                let personId = $("#search-box").val();
                let obj = persons.find(x => x.id === personId);
              
                //console.log(obj);
                if(obj !== undefined){
                    console.log(obj[0]);
                    $(`<div class="q-box__question">
                                        <input class="form-check-input question__input" id="q_2_yes" name="q_2" type="radio" value="${obj.id}"> 
                                        <label class="form-check-label question__label" for="q_2_yes">${obj.name}</label>
                                    </div>`).insertAfter("#search-container");
                }
                
            });

            

           



$( "#form-wrapper" ).submit(function( event ) {
 
  // Stop form from submitting normally
  event.preventDefault();

    diagnosis_url = web_root+"diagnosis?token="+token;

  $.ajax({
    type: "GET",
    url: diagnosis_url,
    contentType: "application/json",
    data: {"symptoms":JSON.stringify(checkedIdArr),"gender":"female","year_of_birth": 20},
    dataType: 'jsonp',
    async:true,
    crossDomain:true,
    headers: {
        "Authorization": "Basic " + apiKey
    },
    success: function(response){
        //if request if made successfully then the response represent the data
        // alert(JSON.stringify(response));
        $("#result").append(`<h5>The Patient could be suffering from one of these Diseases</h5>`);
        $("#result").append(`<table class="table">
  <thead class="table-dark">
    <tr>
      <th scope="col">Disease</th>
      <th scope="col">Specialists to contact</th>
    </tr>
  </thead>
  <tbody></tbody>
</table>`);
        let arr1 = response[0].Specialisation;
        let arr2 = response;
        let issues = "";
      
        
        for(i in arr2){
          let spec = "";
          if(arr2[i].Specialisation.length>0 && arr2[i].Specialisation.length <= 1){
            spec += arr2[i].Specialisation[0].Name;
          }else if(arr2[i].Specialisation.length>1 && arr2[i].Specialisation.length <= 2){
            spec += arr2[i].Specialisation[0].Name+ ", "+arr2[i].Specialisation[1].Name
          }else if(arr2[i].Specialisation.length>2 && arr2[i].Specialisation.length <= 3){
            spec += arr2[i].Specialisation[0].Name+ ", "+arr2[i].Specialisation[1].Name+ ", "+arr2[i].Specialisation[2].Name
          }
        $("#result .table tbody").append(`<tr>
      <th scope="row">${arr2[i].Issue.Name}</th><td>${spec}</td></tr>`);
        }
        
     
        
        

    },
    error: function(er){
      alert(er);
    }
  });
  
});

});