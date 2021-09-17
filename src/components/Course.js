async function getCourse(lessonID) {
    let response = await fetch("../src/pages/"+ lessonID +".html");
    if (!response.ok) {
        let notFoundTemplate = `
            <div class="nf-container">
                <img src="../../public/img/404.png">
            </div>
        `;
        return ["404" , notFoundTemplate];
    } else {
        let body = await response.text();

        let pageTitle = body.match("(?<=<h2>)(.*?)(?=</h2>)")[0];

        return [pageTitle , body];
    }
}

export default getCourse;