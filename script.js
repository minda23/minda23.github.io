
/*
Prvy bod : chceme ak je input prázdny vypisať alert
druhy bod: 



 */


let input_user = $("#myInput").val();
let add_task = $("#add_task");
let item;

             
    
    $('#add_task').click(function(e) {
        e.preventDefault();
        let inputVal = $('#myInput').val();
        if (inputVal.trim() !== "") {
            let newTask = $(
                '<li style="margin-top:1rem">' +
                    '<img class="checked" src="checked.svg"' +
                    '<img class="icon empty" src="empty.svg" style="display:none;">'  +
                    inputVal +
                    '<img class="remove trash" src="trash.svg" style="margin-top:-1rem">' +
                '</li>'
            );
            $('ul').append(newTask);
            $('#myInput').val('');
        }
    
    });

         /*teraz sme odstranili li

         chceme odstraniť ale len jedno li




         */
        

          
             $(document).on('click', '.remove.trash', function() {
             console.log("ahoj"); 
             let input_user = $("#myInput").val(); 
             $(this).closest('li').remove(); 
    });


          $(document).on('click', '.icon.checked', function() {
        $(this).hide();
        $(this).siblings('.icon.empty').show();
    });

    $(document).on('click', '.icon.empty', function() {
        $(this).hide();
        $(this).siblings('.icon.checked').show();
    });

    

