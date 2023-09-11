export const htmlFile = `
<!DOCTYPE html>
<html lang="en">

    <head>
        <title>HighLight Js Example </title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.5.1/styles/default.min.css">
        <script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.5.1/highlight.min.js"></script>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
        <script src="//cdnjs.cloudflare.com/ajax/libs/highlightjs-line-numbers.js/2.8.0/highlightjs-line-numbers.min.js"></script>
        <!-- and it's easy to individually load additional languages like go.min.js-->
        <script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.5.1/languages/csharp.min.js"></script>
        <!-- add custom theme agate.min.css all referenced from hljs-->
        <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.0.3/styles/vs2015.min.css">
        <Style>
            /* for block of numbers */
            .hljs-ln-numbers {
                -webkit-touch-callout: none;
                -webkit-user-select: none;
                -khtml-user-select: none;
                -moz-user-select: none;
                -ms-user-select: none;
                user-select: none;

                text-align: left;
                color: rgb(255, 255, 255);
                border-right: 3px solid rgb(255, 255, 255);
                vertical-align: top;
                padding-right: 5px;

                /* your custom style here */
            }

            /* for block of code */
            .hljs-ln-code {
                padding-right: 10px;
            }

            .hljs-ln td {
                padding-top: px;
                padding-right: 5px;
                padding-bottom: px;
                padding-left: 5px;
            }
        </Style>
    </head>

    <body>
        <h2>C Sharp highlight</h2>
        <div class="d-inline-flex p-2 bd-highlight">
            <pre>
                <code class="csharp rounded  shadow-sm p-3 mb-5">class Program
{
    static void Main(string[] args)
    {
        //var s = "Example Case of hljs As of date 10 Nov 2022";
        var h = new int[] { 4, 2, 0, 3, 2, 5 };
        var obj = new Program();
        Console.WriteLine(string.Join(" ",h));
    }
}
                </code>
            </pre>
        </div>
        <script>
            hljs.initHighlightingOnLoad();
            hljs.initLineNumbersOnLoad();
        </script>
    </body>

</html>
`;
