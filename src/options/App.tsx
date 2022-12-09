const App = () => {
  return (
    <div>
      <div className="chameleon___email__signature__header">
        E-MAIL SIGNATURE
      </div>

      <div className="chameleon__signature__workarea">
        <div className="material-icons chameleon__signature__workarea__preloader chameleon___rotating__animation chameleon__hide__element">
          sync
        </div>

        <div className="chameleon__signature__config">
          <div className="chameleon__h4__title chameleon__width__full">
            Contact Details
          </div>

          <form id="chameleon__email__signature__config__form">
            <div className="chameleon__email__signature__config__form__name chameleon__hide__element__important">
              <div className="chameleon__email__signature__config__form__name__title">
                <label htmlFor="chameleon__email__signature__config__form__name__input">
                  NAME
                </label>
              </div>
              <div className="chameleon__email__signature__config__form__name__checkbox">
                <input
                  data-field="name"
                  id="chameleon__email__signature__config__form__name__checkbox"
                  type="checkbox"
                />
              </div>
              <div className="chameleon__email__signature__config__form__name__input">
                <input
                  maxLength={64}
                  data-field="name"
                  placeholder="ENTER NAME"
                  id="chameleon__email__signature__config__form__name__input"
                  type="text"
                />
              </div>
            </div>

            <div className="chameleon__email__signature__config__form__title chameleon__hide__element__important">
              <div className="chameleon__email__signature__config__form__title__title">
                <label htmlFor="chameleon__email__signature__config__form__title__input">
                  TITLE
                </label>
              </div>
              <div className="chameleon__email__signature__config__form__title__checkbox">
                <input
                  data-field="title"
                  id="chameleon__email__signature__config__form__title__checkbox"
                  type="checkbox"
                />
              </div>
              <div className="chameleon__email__signature__config__form__name__input">
                <input
                  maxLength={64}
                  data-field="title"
                  placeholder="ENTER TITLE"
                  id="chameleon__email__signature__config__form__title__input"
                  type="text"
                />
              </div>
            </div>

            <div className="chameleon__email__signature__config__form__mobile">
              <div className="chameleon__email__signature__config__form__mobile__title">
                <label htmlFor="chameleon__email__signature__config__form__mobile__input">
                  MOBILE
                </label>
              </div>
              <div className="chameleon__email__signature__config__form__mobile__checkbox">
                <input
                  data-field="mobile"
                  id="chameleon__email__signature__config__form__mobile__checkbox"
                  type="checkbox"
                />
              </div>
              <div className="chameleon__email__signature__config__form__mobile__input">
                <input
                  maxLength={25}
                  data-field="mobile"
                  placeholder="ENTER MOBILE"
                  id="chameleon__email__signature__config__form__mobile__input"
                  type="text"
                />
              </div>
            </div>

            <div className="chameleon__email__signature__config__form__office_phone">
              <div className="chameleon__email__signature__config__form__office_phone__title">
                <label htmlFor="chameleon__email__signature__config__form__office_phone__input">
                  OFFICE PHONE
                </label>
              </div>
              <div className="chameleon__email__signature__config__form__office_phone__checkbox">
                <input
                  data-field="office_phone"
                  id="chameleon__email__signature__config__form__office_phone__checkbox"
                  type="checkbox"
                />
              </div>
              <div className="chameleon__email__signature__config__form__office_phone__input">
                <input
                  maxLength={25}
                  data-field="office_phone"
                  placeholder="ENTER OFFICE PHONE"
                  id="chameleon__email__signature__config__form__office_phone__input"
                  type="text"
                />
              </div>
            </div>

            <div className="chameleon__email__signature__config__form__extension">
              <div className="chameleon__email__signature__config__form__extension__title">
                <label htmlFor="chameleon__email__signature__config__form__extension__input">
                  EXTENSION
                </label>
              </div>
              <div className="chameleon__email__signature__config__form__extension__checkbox">
                <input
                  data-field="extension"
                  id="chameleon__email__signature__config__form__extension__checkbox"
                  type="checkbox"
                />
              </div>
              <div className="chameleon__email__signature__config__form__extension__input">
                <input
                  maxLength={15}
                  data-field="extension"
                  placeholder="ENTER EXTENSION"
                  id="chameleon__email__signature__config__form__extension__input"
                  type="text"
                />
              </div>
            </div>

            <div className="chameleon__email__signature__config__form__direct_line">
              <div className="chameleon__email__signature__config__form__direct_line__title">
                <label htmlFor="chameleon__email__signature__config__form__direct_line__input">
                  DIRECT LINE
                </label>
              </div>
              <div className="chameleon__email__signature__config__form__direct_line__checkbox">
                <input
                  data-field="direct_line"
                  id="chameleon__email__signature__config__form__direct_line__checkbox"
                  type="checkbox"
                />
              </div>
              <div className="chameleon__email__signature__config__form__direct_line__input">
                <input
                  maxLength={25}
                  data-field="direct_line"
                  placeholder="ENTER DIRECT LINE"
                  id="chameleon__email__signature__config__form__direct_line__input"
                  type="text"
                />
              </div>
            </div>

            <div className="chameleon__email__signature__config__form__categories">
              <div className="chameleon__email__signature__config__form__categories__title">
                <label htmlFor="chameleon__email__signature__config__form__categories__select">
                  CATEGORIES
                </label>
              </div>
              <div className="chameleon__email__signature__config__form__categories__checkbox">
                <input
                  data-field="categories"
                  id="chameleon__email__signature__config__form__categories__checkbox"
                  type="checkbox"
                />
              </div>
              <div className="chameleon__email__signature__config__form__categories__select">
                <select
                  data-field="categories"
                  id="chameleon__email__signature__config__form__categories__select"
                ></select>
              </div>
            </div>

            <div className="chameleon__email__signature__config__form__additional_info">
              <div className="chameleon__email__signature__config__form__additional_info__title">
                <label htmlFor="chameleon__email__signature__config__form__additional_info__textarea">
                  ADDITIONAL INFO
                </label>
              </div>
              <div className="chameleon__email__signature__config__form__additional_info__checkbox">
                <input
                  data-field="additional_info"
                  id="chameleon__email__signature__config__form__additional_info__checkbox"
                  type="checkbox"
                />
              </div>
              <div className="chameleon__email__signature__config__form__additional_info__textarea">
                <textarea
                  data-field="additional_info"
                  placeholder="ENTER ADDITIONAL INFO"
                  id="chameleon__email__signature__config__form__additional_info__textarea"
                ></textarea>
              </div>
            </div>
          </form>
        </div>
        <div className="chameleon__signature__preview">
          <div className="chameleon__h4__title chameleon__width__full">
            Signature Preview
          </div>
        </div>
      </div>

      <div className="chameleon__signature__update__status"></div>

      <div className="chameleon__save__signature__config chameleon__hide__element">
        <button id="chameleon__save__signature__config">
          UPDATE THE SIGNATURE
        </button>
      </div>
    </div>
  );
};

export default App;
