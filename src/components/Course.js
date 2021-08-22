async function getCourse(lessonID) {
    let response = await fetch("../src/pages/"+ lessonID +".html");
    let body = await response.text();

    return body;
}

export default getCourse;