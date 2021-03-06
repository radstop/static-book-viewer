import "../handlers/hashChange.js";
import handleActiveCourse from "../handlers/handleActiveCourse.js";

async function getCourse(lessonID) {
  let response = await fetch("../src/pages/" + lessonID + ".html");

  handleActiveCourse(lessonID)

  if (!response.ok) {
    let notFoundTemplate = `
            <div class="nf-container">
                <img src="../../public/img/404.png">
            </div>
        `;
    return ["404", notFoundTemplate];
  }

  const body = await response.text();
  const pageTitle = body.match("(?<=<h2>)(.*?)(?=</h2>)")[0];
  return [pageTitle, body];
}

export default getCourse;
