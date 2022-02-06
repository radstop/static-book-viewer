import HandleSettings, { setTheme, saveData, setToDefaults } from '../handlers/handleSettings.js'

// load and set exist setting data
const config = await HandleSettings();

const { theme, fontFamily, fontSize, latinFont } = config;

export default async function Setting() {
    // setting component
    const newNode = `
    <div class="setting">
    <button class="setting__toggle">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: rgba(0, 0, 0, 1);transform: ;msFilter:;"><path d="M12 16c2.206 0 4-1.794 4-4s-1.794-4-4-4-4 1.794-4 4 1.794 4 4 4zm0-6c1.084 0 2 .916 2 2s-.916 2-2 2-2-.916-2-2 .916-2 2-2z"></path><path d="m2.845 16.136 1 1.73c.531.917 1.809 1.261 2.73.73l.529-.306A8.1 8.1 0 0 0 9 19.402V20c0 1.103.897 2 2 2h2c1.103 0 2-.897 2-2v-.598a8.132 8.132 0 0 0 1.896-1.111l.529.306c.923.53 2.198.188 2.731-.731l.999-1.729a2.001 2.001 0 0 0-.731-2.732l-.505-.292a7.718 7.718 0 0 0 0-2.224l.505-.292a2.002 2.002 0 0 0 .731-2.732l-.999-1.729c-.531-.92-1.808-1.265-2.731-.732l-.529.306A8.1 8.1 0 0 0 15 4.598V4c0-1.103-.897-2-2-2h-2c-1.103 0-2 .897-2 2v.598a8.132 8.132 0 0 0-1.896 1.111l-.529-.306c-.924-.531-2.2-.187-2.731.732l-.999 1.729a2.001 2.001 0 0 0 .731 2.732l.505.292a7.683 7.683 0 0 0 0 2.223l-.505.292a2.003 2.003 0 0 0-.731 2.733zm3.326-2.758A5.703 5.703 0 0 1 6 12c0-.462.058-.926.17-1.378a.999.999 0 0 0-.47-1.108l-1.123-.65.998-1.729 1.145.662a.997.997 0 0 0 1.188-.142 6.071 6.071 0 0 1 2.384-1.399A1 1 0 0 0 11 5.3V4h2v1.3a1 1 0 0 0 .708.956 6.083 6.083 0 0 1 2.384 1.399.999.999 0 0 0 1.188.142l1.144-.661 1 1.729-1.124.649a1 1 0 0 0-.47 1.108c.112.452.17.916.17 1.378 0 .461-.058.925-.171 1.378a1 1 0 0 0 .471 1.108l1.123.649-.998 1.729-1.145-.661a.996.996 0 0 0-1.188.142 6.071 6.071 0 0 1-2.384 1.399A1 1 0 0 0 13 18.7l.002 1.3H11v-1.3a1 1 0 0 0-.708-.956 6.083 6.083 0 0 1-2.384-1.399.992.992 0 0 0-1.188-.141l-1.144.662-1-1.729 1.124-.651a1 1 0 0 0 .471-1.108z"></path></svg>
    </button>

    <div class="setting__content">
        <div class="setting__items">
            <h3>تنظیمات</h3>

            <form id="setting_form">
                <div class="setting__item">
                    <span>فونت فارسی</span>
                    <select name="fontFamily">
                        <option value="sahel">ساحل</option>
                        <option value="vazir">وزیر</option>
                        <option value="estedad">استعداد</option>
                    </select>
                </div>
                <div class="setting__item">
                    <span>فونت انگلیسی</span>
                    <select name="latinFont">
                        <option value="domine">Domine</option>
                        <option value="grandstander">Grandstander</option>
                        <option value="roboto">Roboto</option>
                        <option value="rubik">Rubik</option>
                    </select>
                </div>
                <div class="setting__item">
                    <span>اندازه فونت</span>
                    <input type="number" placeholder="font size" name="fontSize" value="${fontSize}" />
                </div>
                <div class="setting__item">
                    <span>نوع پوسته (تم)</span>
                    <select name="theme">
                        <option value="default">Light</option>
                        <option value="dark">Dark</option>
                    </select>
                </div>
                <br/>
                <button class="save-setting">ذخیره</button>
            </form>

            <button id="handle_defaults">تنظیمات پیش‌فرض</button>
        </div>
    </div>
    </div>
    `
    return newNode
}

export async function settingActions() {
    document.body.style.fontFamily = fontFamily + ',' + latinFont;
    document.body.style.fontSize = fontSize + 'px';
    setTheme(theme);

    // set current theme name to select
    document.querySelector('#setting_form [name="fontFamily"]').value = fontFamily;
    document.querySelector('#setting_form [name="latinFont"]').value = latinFont;
    document.querySelector('#setting_form [name="theme"]').value = theme;


    // toggle setting
    document.querySelector('.setting__toggle').addEventListener('click', (e) => {
        const settingContent = document.querySelector('.setting__content');

        if (settingContent.classList.contains('setting__content--active')) {
            settingContent.classList.remove('setting__content--active');
        } else {
            settingContent.classList.add('setting__content--active');
        }

        if (document.querySelector('.search__content--active')) {
            document.querySelector('.search__content--active').classList.remove('search__content--active');
        }
    });

    // handle save data to setting storage
    document.querySelector('#setting_form').addEventListener('submit', (e) => {
        e.preventDefault();

        const form = e.target;

        const newConfigs = {
            fontFamily: form.fontFamily.value,
            fontSize: form.fontSize.value,
            latinFont: form.latinFont.value,
            theme: form.theme.value
        }

        saveData(newConfigs);

        document.location.reload()
    })

    // Set to default settings
    document.querySelector('#handle_defaults').addEventListener('click', (e) => {
        setToDefaults();
        document.location.reload();
    })
}

