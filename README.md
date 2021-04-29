# date_to_day_TYPESCRIPT
<b>PROBLEM STATEMENT</b><br>
Given a set of date-value pairs, convert them to the corresponding day-value pairs for a given set of constraints on the values.

### PRIMARY DEPENDENCIES

In order to run the program the following dependencies are required to be installed:
<ul>
  <li>nodeJS: https://nodejs.org/en/ </li>
  <li>typescript: npm install typescript --save-dev</li>
  <li>ts-node: npm install ts-node --save-dev</li>
  <li>chai:  npm install chai --save-dev</li>
  <li>mocha: sudo npm install mocha --save-dev</li><br><br>
    
Running the program requires to compile the file 'src/work.ts' as follows:<br><br>
<i><font color='red'>tsc --lib "ES2016","DOM" src/work.ts</font></i><br><br>

If the above file is running without unit tests, the results can also be observed in the cmd of VS Code using the command<br><br>
<i><u>node src/work.js</u></i><br><br>
The output can also be viewed in the browser's developer's console using the provided file src/index.html.<br><br>

In order to run the unit test file, the following command is to be executed<br><br>
<i>npm test -- -w</i><br><br>

<hr>

### ABOUT THE PROBLEM STATEMENT
The input set consists of date-value pairs ( dates are preferably continuous with the added assumption that it at least containts a Sunday and a Monday ). The values by themselves do not caryy any semantic weightage. The task is to compute the corresponding day of the week for each given date in the input set. Sounds straightforward, right? Well, if the input set is of 7 continuous dates with no 2 dates landing on te same day of the week, the task is simply straightforward. However, the issue arises otherwise in the following scenarios:<br>
<ul>
  <li><b>Number of dates in the input set < 7 : </b> Since the dates are continuous, the output set must consist of one day-value pair for each day of the week. So, if a pasrticular day isn't encountered in a smaller input set, it's value is computed using the mean of the values of its precedding and succeeding days.The complete heuristic has been documented in the code file <i>src/work.ts</i></li>
  <li><b>Number of dates in the input set > 7 : </b> In such a scenario, it's implicit to encounter at least two values for at least one day of the week. Thus, in order to compute it's actual value in the result, all the values for a given day are added up.</li>   
</ul>

<hr>

### INPUT ASSUMPTIONS
<ul>
  <li>Input will have at least Sunday and Monday</li>
  <li>Input dictionary is a string in the range [ 1970-01-01 , .... , 2100-01-01 ] </li>
  <li>Corresponding integer calues are in the range [-1,000,000 , ..... , 1,000,000 ]</li>
</ul>

<hr>

### ABOUT THE OUTPUT
The output set starts from day-value pair of Sunday all the way to Saturday. In order to view the results, the console output can be accessed from the unit tests file in test/work.ts

<hr>

### UNIT TESTING
A total of 5 unit tests have been specified for the problem statement. The tests are as follows.<br>
<img src='unit_tests.png'> </img><br>
All the tests have been performed two sets of inputs, one with 5 dates and other with 8 date-value pairs to cover up the possible input cases.


