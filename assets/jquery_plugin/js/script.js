$(document).ready(function(){
    $( "#hideo" ).hideo({
        content: [
            {
                label : "user"
            },
            {
                label : "envelope"
            },
            {
                label : "lock"
            }
        ]
    });

    $( "#hoshi" ).hoshi({
        content: [
            {
                label : "Name",
                color : "green"
            },
            {
                label : "Street",
                color : "blue"

            },
            {
                label : "Town",
                color : "orange"

            }
        ]
    });
    $( "#haruki" ).haruki({
        content: [
            {
                label : "First Name"
            },
            {
                label : "Last Name"
            },
            {
                label : "Email"
            }
        ]
    });
    $( "#juro" ).juro({
        content: [
            {
                label : "First Name"
            },
            {
                label : "Last Name"
            },
            {
                label : "Maiden Name"
            }
        ]
    });
    $( "#madoka" ).madoka({
        content: [
            {
                label : "Frequency"
            },
            {
                label : "Weight"
            },
            {
                label : "Strength"
            }
        ]
    });

});
