First of all, I would write automated tests for some major functionalities, such are: Register/Login form (with BVA), Search (Filter) box, Picture adding form (with BVA) and deleting (BE), Comment adding/deleting (BE). Tests would be grouped by name of functionalities itself. For example for Picture adding, I would try to add picture with this types of entries in input field: empty string/numbers/special characters/one char etc. For Search (Filter) box BVA would be: name, partial title, year of upload, special char.

Of course, with knowledge of client’s demands (specifications) and with insight in project code, it is easier to write tests. If I had access to application code I would add some attributes that are easier to select, specifically selectors that are recommended by Cypress. That kind of attributes are not liable to change and are safe to use regardless of software upgrades and changes.


While testing this application, I had an issue that in some periods of times (approx. 2-3 hours at Saturday afternoon and from around 23.30 Saturday night until now) most of functionalities were disabled or were having difficulty to respond. As app started to fail, test started too. Submit button/Add image button in Create gallery form became not responsive, My gallery option and All galleries option in Menu, they were showing page without any pictures, as it is shown in Screenshots > filterOption.spec.js > Gallery functionality testing*. Only thing that was working was Logout option and that Create gallery form was visible. 

After all of the above, Performance testing should be conducted with some tools like JMeter, because it is possible that the app was unstable as it was used by many users. 
So I’m not sure functionalities listed in paragraph above are critical or it would be just performance test failure :)

