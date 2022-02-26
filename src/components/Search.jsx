import React from "react";

function Search() {
    return (
      <div className="about">
        <div className="container">
          <div className="row align-items-center my-5">
            <div className="col-lg-7">
              <form>
                <div className="name">
                <label HTMLFor="name">Card Name</label><br />
                <input type="text" id="name"/><br />
                </div>
                
                <div class="card-type">
                <label HTMLFor="card-type">Card Type:</label><br/>
                <select name="card-type" id="card-type">
                    <option>Choose an Option</option>
                    <option value="type1">Type 1</option>
                    <option value="type2">Type 2</option>
                    <option value="type3">Type 3</option>
                </select><br/>
                </div>
                
                <input type="submit" value="Submit" />
                <input type="reset" value="Reset"/>
                </form>
            </div>
            <div className="col-lg-5">
              <h1 className="font-weight-light">Card Search</h1>
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

export default Search;