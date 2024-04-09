# One Step Closer

![preview](/client/assets/osc_preview.png)

# Features:
* Has features!

## 1 - Project Setup Requirements

#### Step 1: Clone Repo
* Clone this repository by running the following command from in the Git Bash terminal:
  ```bash
   git clone https://github.com/mejia-dev/one-step-closer.git
   ```

#### Step 2: .env Setup
* This project requires a file titled `.env` residing in the project directory (not the root directory).
  * Navigate to the project directory:
    ```bash
    cd one-step-closer/osc_backend
    ```
  * Create the file:
    ```bash
    touch .env
    ```
  * Using any text editor, modify the file to include the following lines. Replace any of the values with the necessary values for the database environment being used. **Please note:** Django is unable to create a MySQL database. This must be done manually in order for Django to use it:
    ```javascript
    DBCONFIG_NAME = "one-step-closer"
    DBCONFIG_USER = "YOUR_USERNAME_HERE"
    DBCONFIG_PASSWORD = "YOUR_PASSWORD_HERE"
    DBCONFIG_HOST = "localhost"
    DBCONFIG_PORT = "3306"
    ```
  * Create a new secret key using:
      ```python
      from django.core.management.utils import get_random_secret_key
      print(get_random_secret_key())
      ```
  * Save the key in `.env` as `SECRET_KEY`.
  * In `settings.py`, change `DEBUG` to False and set `SECRET_KEY = os.getenv("SECRET_KEY")`.



## 3 - Run the Project

* Create a virtual environment for the project. This can be named anything (though `venv` is common) and can be stored anywhere (storing it in the `one-step-closer` directory is acceptable, but make sure it is excepted in the gitignore if pushing changes to GitHub). For more information on virtual environments, refer to the [official Python documentation](https://docs.python.org/3/tutorial/venv.html). 
  ```bash
  cd one-step-closer
  python -m venv venv
  ```

* Activate the virtual environment in the terminal:

  * Windows:
    ```cmd
    venv\Scripts\activate
    ```
  * Unix / MacOS:
    ```cmd
    source venv/bin/activate
    ```

* Install the requirements from the one-step-closer root directory:
  ```bash
  pip install -r requirements.txt
  ```

* Create the database:
  ```bash
  ./manage.py migrate
  ```

* Create a Django admin account. A prompt will appear for a username, email address, and password.
  ```bash
  manage.py createsuperuser
  ```

* Run the Django development server:
  ```bash
  ./manage.py runserver
  ```


## Known Bugs

* none

If a bug has been discovered, please add it to the [Issues tracker](https://github.com/mejia-dev/one-step-closer/issues).


## License

MIT License

Copyright (c) 2024 github.com/mejia-dev

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
