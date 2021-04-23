<!-- created with skeleton css framework -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta name="keyword" content="Guess the number">
    <meta name="description" content="play the guess work.">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/skeleton/2.0.4/skeleton.css">
    <title>Number Guesser</title>
</head>
<body>
    <div class="container">
        <h1>Number Guesser</h1>
        <div id="game">
            <p>Guess a number between <span class="min-num"></span> and <span class="max-num"></span></p>
            <input type="number" id="guess-input" placeholder="Enter your Guess...">
            <input type="submit" value="submit" id="guess-btn">
            <p class="message"></p>
        </div>
    </div>

    <script src="app.js"></script>
</body>
</html>