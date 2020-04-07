
$('form').submit((e) => {
    e.preventDefault()

    let report = $('#report').val();
    // console.log(report)
    $.ajax({
        accepts: {
            type: 'application/json'
        },
        method: 'POST',
        url: '/upload_json',
        data: { report }

    })
        .then(res => console.log(res))
        .catch(err => console.log(err));

})
