import HandleSettings, { setTheme, saveData } from '../helpers/handleSettings.js'

export default async function Setting() {
    // load and set exist setting data
    const config = await HandleSettings();


    const { theme, fontFamily, fontSize } = config;

    document.body.style.fontFamily = fontFamily;
    document.body.style.fontSize = fontSize + 'px';
    setTheme(theme);

    document.querySelector('.container')
        .innerHTML +=
        `<div class="setting">
            <button class="setting__toggle">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: rgba(0, 0, 0, 1);transform: ;msFilter:;"><path d="m2.344 15.271 2 3.46a1 1 0 0 0 1.366.365l1.396-.806c.58.457 1.221.832 1.895 1.112V21a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-1.598a8.094 8.094 0 0 0 1.895-1.112l1.396.806c.477.275 1.091.11 1.366-.365l2-3.46a1.004 1.004 0 0 0-.365-1.366l-1.372-.793a7.683 7.683 0 0 0-.002-2.224l1.372-.793c.476-.275.641-.89.365-1.366l-2-3.46a1 1 0 0 0-1.366-.365l-1.396.806A8.034 8.034 0 0 0 15 4.598V3a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v1.598A8.094 8.094 0 0 0 7.105 5.71L5.71 4.904a.999.999 0 0 0-1.366.365l-2 3.46a1.004 1.004 0 0 0 .365 1.366l1.372.793a7.683 7.683 0 0 0 0 2.224l-1.372.793c-.476.275-.641.89-.365 1.366zM12 8c2.206 0 4 1.794 4 4s-1.794 4-4 4-4-1.794-4-4 1.794-4 4-4z"></path></svg>
            </button>

            <div class="setting__content">
                <div class="setting__items">
                    <h3>تنظیمات</h3>

                    <form id="setting_form">
                        <select name="fontFamily">
                            <option value="sahel">ساحل</option>
                            <option value="vazir">وزیر</option>
                            <option value="estedad">استعداد</option>
                        </select>

                        <input type="number" placeholder="font size" name="fontSize" value="${fontSize}" />

                        <select name="theme">
                            <option value="default">Light</option>
                            <option value="dark">Dark</option>
                        </select>

                        <button>Save</button>
                    </form>
                </div>
            </div>
        </div>`;

    // set current theme name to select
    document.querySelector('#setting_form [name="fontFamily"]').value = fontFamily;
    document.querySelector('#setting_form [name="theme"]').value = theme;


    // toggle setting
    document.querySelector('.setting__toggle').addEventListener('click', (e) => {
        const settingContent = document.querySelector('.setting__content');

        if (settingContent.classList.contains('setting__content--active')) {
            settingContent.classList.remove('setting__content--active');
        } else {
            settingContent.classList.add('setting__content--active');
        }
    });

    // handle save data to setting storage
    document.querySelector('#setting_form').addEventListener('submit', (e) => {
        e.preventDefault();

        const form = e.target;

        const newConfigs = {
            fontFamily: form.fontFamily.value,
            fontSize: form.fontSize.value,
            theme: form.theme.value
        }

        saveData(newConfigs);

        document.location.reload()
    })

    // Todo: set latin font

    // TODO: set to default settings

    // return creator
}