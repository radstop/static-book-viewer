async function getCourse(lessonID) {
    let response = await fetch("../src/pages/"+ lessonID +".html");
    let body = await response.text();

    let pageTitle = body.match("(?<=<h2>)(.*?)(?=</h2>)")[0];

    return [pageTitle , body];
}

export default getCourse;