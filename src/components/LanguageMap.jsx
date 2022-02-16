import React from "react";

function LanguageMap() {
    return (
      <div className="about">
        <div class="container">
          <div class="row align-items-center my-5">
            <div class="col-lg-7">
              <form>
                <div class="checklist">
                    <input type="checkbox" id="english" />
                    <label>English</label><br />
                    <input type="checkbox" id="chineseS" />
                    <label>Chinese (Simplified)</label><br />
                    <input type="checkbox" id="chineseT" />
                    <label>Chinese (Traditional)</label><br />
                    <input type="checkbox" id="french" />
                    <label>French</label><br />
                    <input type="checkbox" id="german" />
                    <label>German</label><br />
                    <input type="checkbox" id="italian" />
                    <label>Italian</label><br />
                    <input type="checkbox" id="korean" />
                    <label>Korean</label><br />
                    <input type="checkbox" id="japanese" />
                    <label>Japanese</label><br />
                    <input type="checkbox" id="portugese" />
                    <label>Portugese</label><br />
                    <input type="checkbox" id="russian" />
                    <label>Russian</label><br />
                    <input type="checkbox" id="spanish" />
                    <label>Spanish</label><br />
                </div>
                
                <input type="submit" value="Submit" />
                <input type="reset" value="Reset"/>
                </form>
            </div>
            <div class="col-lg-5">
              <h1 class="font-weight-light">Language Map</h1>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy text
                ever since the 1500s, when an unknown printer took a galley of
                type and scrambled it to make a type specimen book.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

export default LanguageMap;