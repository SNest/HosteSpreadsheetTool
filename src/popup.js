// v.6.10

var ids = [];
var urls = [];
var publishers = [];
var elements = [];
var results = [];
var linksCount = 0;
var brokenLinksCount = 0;
var businessUrlBase = "http://admin.austin.ownlocal.com/businesses/";
var sheets = [];
var validSheetNames = ['6.22.17', '6.30', '7.4.17', '7.5.17', '7.6.17', '7.7.17', '7.8.17', '7.9.17', '7.10.17', '7.11.17', '7.12.17', '7.13.17', '7.14.17', '7.15.17', '7.16.17', '7.17.17', '7.18.17', '7.19.17', '7.20.17', '7.21.17', '7.22.17', '7.23.17', '7.24.17', '7.25.17', '7.26.17', '7.27.17', '7.28.17', '7.29.17', '7.30.17', '7.31.17', '8.1.17', '8.2.17', '8.3.17', '8.4.17', '8.5.17', '8.6.17', '8.7.17', '8.8.17', '8.9.17', '8.10.17', '8.11.17', '8.12.17', '8.13.17', '8.14.17', '8.15.17', '8.16.17', '8.17.17', '8.18.17', '8.19.17', '8.20.17', '8.21.17', '8.22.17', '8.23.17', '8.24.17', '8.25.17', '8.26.17', '8.27.17', '8.28.17', '8.29.17', '8.30.17', '8.31.17', '9.1.17', '9.2.17', '9.3.17', '9.4.17', '9.5.17', '9.6.17', '9.7.17', '9.8.17', '9.9.17', '9.10.17', '9.11.17', '9.12.17', '9.13.17', '9.14.17', '9.15.17', '9.16.17', '9.17.17', '9.18.17', '9.19.17', '9.20.17', '9.21.17', '9.22.17', '9.23.17', '9.24.17', '9.25.17', '9.26.17', '9.27.17', '9.28.17', '9.29.17', '9.30.17', '10.1.17', '10.2.17', '10.3.17', '10.4.17', '10.5.17', '10.6.17', '10.7.17', '10.8.17', '10.9.17', '10.10.17', '10.11.17', '10.12.17', '10.13.17', '10.14.17', '10.15.17', '10.16.17', '10.17.17', '10.18.17', '10.19.17', '10.20.17', '10.21.17', '10.22.17', '10.23.17', '10.24.17', '10.25.17', '10.26.17', '10.27.17', '10.28.17', '10.29.17', '10.30.17', '10.31.17', '11.1.17', '11.2.17', '11.3.17', '11.4.17', '11.5.17', '11.6.17', '11.7.17', '11.8.17', '11.9.17', '11.10.17', '11.11.17', '11.12.17', '11.13.17', '11.14.17', '11.15.17', '11.16.17', '11.17.17', '11.18.17', '11.19.17', '11.20.17', '11.21.17', '11.22.17', '11.23.17', '11.24.17', '11.25.17', '11.26.17', '11.27.17', '11.28.17', '11.29.17', '11.30.17', '12.1.17', '12.2.17', '12.3.17', '12.4.17', '12.5.17', '12.6.17', '12.7.17', '12.8.17', '12.9.17', '12.10.17', '12.11.17', '12.12.17', '12.13.17', '12.14.17', '12.15.17', '12.16.17', '12.17.17', '12.18.17', '12.19.17', '12.20.17', '12.21.17', '12.22.17', '12.23.17', '12.24.17', '12.25.17', '12.26.17', '12.27.17', '12.28.17', '12.29.17', '12.30.17', '12.31.17', '1.1.18', '1.2.18', '1.3.18', '1.4.18', '1.5.18', '1.6.18', '1.7.18', '1.8.18', '1.9.18', '1.10.18', '1.11.18', '1.12.18', '1.13.18', '1.14.18', '1.15.18', '1.16.18', '1.17.18', '1.18.18', '1.19.18', '1.20.18', '1.21.18', '1.22.18', '1.23.18', '1.24.18', '1.25.18', '1.26.18', '1.27.18', '1.28.18', '1.29.18', '1.30.18', '1.31.18', '2.1.18', '2.2.18', '2.3.18', '2.4.18', '2.5.18', '2.6.18', '2.7.18', '2.8.18', '2.9.18', '2.10.18', '2.11.18', '2.12.18', '2.13.18', '2.14.18', '2.15.18', '2.16.18', '2.17.18', '2.18.18', '2.19.18', '2.20.18', '2.21.18', '2.22.18', '2.23.18', '2.24.18', '2.25.18', '2.26.18', '2.27.18', '2.28.18', '3.1.18', '3.2.18', '3.3.18', '3.4.18', '3.5.18', '3.6.18', '3.7.18', '3.8.18', '3.9.18', '3.10.18', '3.11.18', '3.12.18', '3.13.18', '3.14.18', '3.15.18', '3.16.18', '3.17.18', '3.18.18', '3.19.18', '3.20.18', '3.21.18', '3.22.18', '3.23.18', '3.24.18', '3.25.18', '3.26.18', '3.27.18', '3.28.18', '3.29.18', '3.30.18', '3.31.18', '4.1.18', '4.2.18', '4.3.18', '4.4.18', '4.5.18', '4.6.18', '4.7.18', '4.8.18', '4.9.18', '4.10.18', '4.11.18', '4.12.18', '4.13.18', '4.14.18', '4.15.18', '4.16.18', '4.17.18', '4.18.18', '4.19.18', '4.20.18', '4.21.18', '4.22.18', '4.23.18', '4.24.18', '4.25.18', '4.26.18', '4.27.18', '4.28.18', '4.29.18', '4.30.18', '5.1.18', '5.2.18', '5.3.18', '5.4.18', '5.5.18', '5.6.18', '5.7.18', '5.8.18', '5.9.18', '5.10.18', '5.11.18', '5.12.18', '5.13.18', '5.14.18', '5.15.18', '5.16.18', '5.17.18', '5.18.18', '5.19.18', '5.20.18', '5.21.18', '5.22.18', '5.23.18', '5.24.18', '5.25.18', '5.26.18', '5.27.18', '5.28.18', '5.29.18', '5.30.18', '5.31.18', '6.1.18', '6.2.18', '6.3.18', '6.4.18', '6.5.18', '6.6.18', '6.7.18', '6.8.18', '6.9.18', '6.10.18', '6.11.18', '6.12.18', '6.13.18', '6.14.18', '6.15.18', '6.16.18', '6.17.18', '6.18.18', '6.19.18', '6.20.18', '6.21.18', '6.22.18', '6.23.18', '6.24.18', '6.25.18', '6.26.18', '6.27.18', '6.28.18', '6.29.18', '6.30.18', '7.1.18', '7.2.18', '7.3.18', '7.4.18', '7.5.18', '7.6.18', '7.7.18', '7.8.18', '7.9.18', '7.10.18', '7.11.18', '7.12.18', '7.13.18', '7.14.18', '7.15.18', '7.16.18', '7.17.18', '7.18.18', '7.19.18', '7.20.18', '7.21.18', '7.22.18', '7.23.18'];
var idsColNum = 100;
var pubsColNum = 100;
var urlsColNum = 100;
var linkColNum = 100;
var userColNum = 100;
var tsColNum = 100;
var ecColNum = 100;
var qcColNum = 100;
var bnameColNum = 100;
var statusCodes1 = [];
var statusCodes2 = [];
var errorUrls = [];
var sheetNum = 0;
var numberOrderDesc = false;
var nameOrderDesc = false;
var loadedData = {};


var spreadsheetUrl = "https://docs.google.com/spreadsheets/d/1Ye1Lx8pdshdpfU7d9l3Y131IYGJ1ERONg1t-fPng7z4/pubhtml";

$("body").append(` <i id="spinner" class="fa fa-spinner fa-spin" style="font-size:40px"></i>
    <!-- <div class="col-sm-offset-4 col-sm-4">
        <button class="col-sm-2" id="spreadsheetLeft"><i class="fa fa-caret-left" aria-hidden="true"></i></button>
        <span class="col-sm-8" id="spreadsheetName">Main</span>
        <button class="col-sm-2" id="spreadsheetRight"><i class="fa fa-caret-right" aria-hidden="true"></i></button>
    </div> -->
    <div>
        <table id="sheetTable" class="table table-striped">
            <thead id="sheet-rows-head">
                <tr>
                    <th class="col-sm-1 text-center">#</th>
                    <th class="col-sm-8 text-center">SHEET NAME</th>
                    <th class="col-sm-3 text-center">ADD TO PROCESS</th>
                </tr>
                <tr>
                    <th class="col-sm-1 text-center"><button id="numberDesc" class="lbtn"><i class="fa fa-caret-down" aria-hidden="true"></i></button></th>
                    <th class="col-sm-8 text-center"><button id="nameDesc" class="lbtn"><i class="fa fa-caret-down" aria-hidden="true"></i></button></th>
                    <th id="e" class="col-sm-3 text-center">
                        <input id="processAll" type="checkbox" value=""></input>
                    </th>
                </tr>
            </thead>
            <tbody id="sheet-rows">
            </tbody>
        </table>
    </div>
    <button id="getInfoButton" type="button" class="btn">FIX URLS & GET INFO</button>
    <div id="result"></div>

    </div>`);

var getInfoButton = $("#getInfoButton");

$.get(spreadsheetUrl, function (data) {
    $(data).find("li[id^='sheet-button']").each(function (index) {
        var id = $(this).prop("id");
        var name = $(this).find("a").text();
        id = id.replace("sheet-button-", "");

        if (validSheetNames.indexOf(name) === -1) {
            return false;
        }

        sheets.push({ "number": index + 1, "name": name, "id": id });
        $("#spinner").hide();
        $("#sheet-rows").append(`
                <tr>
                    <td class="col-sm-1 text-center"><b>`+ (index + 1) + `</b></td>
                    <td class="col-sm-8 text-center">`+ name + `</td>
                    <td class="col-sm-3 text-center">
                        <input data-sheet-index='`+ index + `' data-sheet-name='` + name + `' class='processCheckbox' type="checkbox" value=""/>
                    </td>
                </tr>`);
        $("#sheetTable").show();
        $("#getInfoButton").show();
    });
    $("#sheetSpan").text(sheets[sheetNum].name);
})


$("#processAll").click(function () {
    $(".processCheckbox").each(function (index) {
        if ($("#processAll").is(":checked")) {
            $(this).prop('checked', true);
            // $("#getInfoButton").show();
        } else {
            $(this).prop('checked', false);
            // $("#getInfoButton").hide();
        }
    });
});


// $(".processCheckbox").each(function () {
//     $(this).on('click', function() {
//         alert();
//         $(".processCheckbox").each(function () {
//             if ($(this).not(":checked")) {
//                 return true;
//             }
//             $("#getInfoButton").show();
//         })
//     })
// });


function addSheetRows() {
    $("#sheet-rows").html("");
    sheets.forEach(function (item) {
        $("#sheet-rows").append(`
                <tr>
                    <td class="col-sm-1 text-center"><b>`+ item.number + `</b></td>
                    <td class="col-sm-8 text-center">`+ item.name + `</td>
                    <td class="col-sm-3 text-center">
                        <input data-sheet-index='`+ (item.number - 1) + `' data-sheet-name='` + item.name + `' class='processCheckbox' type="checkbox" value=""/>
                    </td>
                </tr>`);
    });
}

$("#numberDesc").click(function () {
    if (numberOrderDesc) {
        $("#numberDesc").html("<i class='fa fa-caret-down' aria-hidden='true'></i>");
        sheets.sort(compareNumber);
        numberOrderDesc = false;
    }
    else {
        sheets.sort(compareNumberDesc);
        $("#numberDesc").html("<i class='fa fa-caret-up' aria-hidden='true'></i>");
        numberOrderDesc = true;
    }
    addSheetRows();
});

$("#nameDesc").click(function () {
    if (nameOrderDesc) {
        $("#nameDesc").html("<i class='fa fa-caret-down' aria-hidden='true'></i>");
        sheets.sort(compareName);
        nameOrderDesc = false;
    }
    else {
        sheets.sort(compareNameDesc);
        $("#nameDesc").html("<i class='fa fa-caret-up' aria-hidden='true'></i>");
        nameOrderDesc = true;
    }
    addSheetRows();
});


$("#sheetTable").hide();
$("#getInfoButton").hide();
$("#menutable").hide();
$("#sheetDiv").hide();

function mainFunction(elements) {
    var results = [];


    elements.forEach(function (element) {
        var url = "";
        var initialStatus = "";
        var response = "";
        var info = {};
        var hasIdError = false;

        try {
            $.ajax({
                url: element.url,
                success: function (data) {
                    var businessId = "";

                    try {
                        businessId = $(data).find("#content").data("businessId");
                    } catch (err) {
                        console.log(err);
                    }

                    if (businessId == element.id) {
                        hasIdError = false;

                    } else {
                        if (businessId == undefined) {
                            hasIdError = true;
                        } else {
                            element.id = businessId;
                            hasIdError = false;
                        }
                    }
                    response = data;
                    element.hasIdError = hasIdError;
                    url = businessUrlBase + element.id;
                    if(url === businessUrlBase){
                        url = businessUrlBase  + 0;
                    }
                },
                complete: function (xhr, textStatus) {
                    var theStatus = xhr.status;
                    if (textStatus == "success") {
                        initialStatus = "success";

                        $.ajax({
                            url: url,
                            success: function (data, textStatus, xhr) {
                                response = data;
                            }, error: function (error) {

                            },
                            complete: function (xhr, textStatus) {
                                element.statusCode1 = theStatus;
                                element.statusCode2 = xhr.status;
                                results.push(buildInfo(response, element, initialStatus, textStatus));
                            }
                        });
                    } else {
                        initialStatus = "fail";

                        $.ajax({
                            url: element.url,
                            success: function (data, textStatus, xhr) {
                                response = data;
                            }, error: function (error) {

                            },
                            complete: function (xhr, textStatus) {
                                element.statusCode1 = theStatus;
                                element.statusCode2 = xhr.status;
                                results.push(buildInfo2(response, element, initialStatus, textStatus, url));
                            }
                        });
                    }
                    statusCodes1.push({ number: element.number, statusCode: xhr.status });
                }
            });

        } catch (err) { }
    }, this);

    return results;
}

function gvi(verificationMessage) {
    var verifiedBy = verificationMessage.substring(verificationMessage.indexOf(" by") + 4, verificationMessage.length - 1);
    var verificationDate = "";
    var verificationStatus = "";
    if (verificationMessage.includes("Verified on")) {
        verificationDate = new Date(verificationMessage.substring(12, verificationMessage.indexOf(" by")));
        verificationDate = formatDate(verificationDate);
        verificationStatus = "verified";
    }
    if (verificationMessage.includes("Business not verified")) {
        verificationStatus = "not verified";
        verifiedBy = "";
    }
    if (verificationMessage.includes("Marked unverifiable")) {
        verificationDate = new Date(verificationMessage.substring(22, verificationMessage.indexOf(" by")));
        verificationDate = formatDate(verificationDate);
        verificationStatus = "unverifiable";
    }
    if (verificationMessage.includes("Queued for verification")) {
        verificationDate = new Date(verificationMessage.substring(26, verificationMessage.length - 1));
        verificationDate = formatDate(verificationDate);
        verificationStatus = "queued";
        verifiedBy = "";
    }

    return { "verifiedBy": verifiedBy, "verificationDate": verificationDate, "verificationStatus": verificationStatus };
}

$(document).ready(function () {
    $.get(spreadsheetUrl, function (data) {
        loadedData = $(data);
    }).done(function () {
        $("#menutable").show();
        $("#sheetDiv").show();
    });
});

getInfoButton.click(function () {
    $("#sheetTable").hide();
    $("#result").hide();
    $("#spinner").show();

    elements = [];
    linksCount = 0;
    brokenLinksCount = 0;
    var i = 1;
    $(".processCheckbox:checked").each(function (index) {
        var sheetIndex = $(this).data('sheetIndex');

        loadedData.find("table:eq(" + sheetIndex + ") >> tr").each(function (index) {

            if ($(this).text().includes("Complete:")) {
                return true;
            }

            $(this).find("td").each(function (index) {

                if ($(this).text().includes("UUID")) {
                    idsColNum = index;
                }
                if ($(this).text().includes("Link")) {
                    linkColNum = index;
                }
                if ($(this).text().includes("User")) {
                    userColNum = index;
                }
                if ($(this).text().includes("Timestamp/Verification")) {
                    tsColNum = index;
                }
                if ($(this).text().includes("Business Name")) {
                    bnameColNum = index;
                }
                if ($(this).text().includes("Error Codes")) {
                    ecColNum = index;
                }
                if ($(this).text().includes("QC") && !$(this).text().includes("Timestamp/QC")) {
                    qcColNum = index;
                }
                if ($(this).text().includes("Listing URL")) {
                    urlsColNum = index;
                }
                if ($(this).text().includes("Publisher Name")) {
                    pubsColNum = index;
                }
            });

            var id = $(this).find("td:eq(" + idsColNum + ")").text();
            var link = $(this).find("td:eq(" + linkColNum + ")").text();
            var user = $(this).find("td:eq(" + userColNum + ")").text();
            var ts = $(this).find("td:eq(" + tsColNum + ")").text();
            var bname = $(this).find("td:eq(" + bnameColNum + ")").text();
            var qc = $(this).find("td:eq(" + qcColNum + ")").text();
            var ec = $(this).find("td:eq(" + ecColNum + ")").text();
            var url = $(this).find("td:eq(" + urlsColNum + ")").text();
            var publisher = $(this).find("td:eq(" + pubsColNum + ")").text();

            if (!id && !url && !publisher) {
                return true;
            }
            if (id === "UUID" || url === "Listing URL" || publisher === "Publisher Name") {
                return true;
            }
            var elem = {
                "number": i++,
                "id": id,
                "url": url,
                "publisher": publisher,

                "link": link,
                "user": user,
                "ts": ts,
                "bname": bname,
                "qc": qc,
                "ec": ec,
            };
            elements.push(elem);

            linksCount++;
        });
    });

   results = mainFunction(elements);

   

    var refreshIntervalId = setInterval(function () {
        results.sort(compare);
        statusCodes1.sort(compareNumber);
        brokenLinksCount = 0;
        $("#copyToClipboardButton").text(results.length + "/" + linksCount);
        var rows = "";
        var style = "";
        var style2 = "";

        results.forEach(function (element) {
            if (element.hasIdError) {
                style2 = "background-color:#FF0000;"
            } else {
                style2 = ""
            }

            if (element.status === "success") {
                if (element.verificationStatus === "unverifiable" || element.verificationStatus === "not verified" || element.verificationStatus === "queued") {
                    if (!element.wasChanged) {
                        style = "background-color:#F0AD4E;";
                    } else {
                        style = "background-color:#F7D6A6;";
                    }
                } else {
                    if (element.verificationStatus === "error") {
                        if (!element.wasChanged) {
                            style = "background-color:#FF0000;";
                        } else {
                            style = "background-color:#FF0000;";
                        }
                    } else {
                        if (!element.wasChanged) {
                            style = "background-color:#5CB85C;";
                        } else {
                            style = "background-color:#ADDBAD;";
                        }
                    }
                }
            } else {
                style = "background-color:#FF0000;";
                element.verificationStatus = "error";
            }

            if (element.needToCheck) {
                style = "background-color:#5BC0DE;";
            }

            if (element.verificationStatus == "error") {
                brokenLinksCount++;
            }
            var sc1 = statusCodes1[element.number - 1];

            // element.statusCode1 = sc1.statusCode;

            // rows += `
            //     <tr style=`+ style + `>
            //         <td  style=`+ style2 + ` class="col-sm-1">` + element.id + `</td>
            //         <td class="col-sm-1">`+ element.link + `</td>
            //         <td class="col-sm-1">`+ element.user + `</td>
            //         <td class="col-sm-2">`+ element.ts + `</td>
            //         <td class="col-sm-1">`+ element.qc + `</td>
            //         <td class="col-sm-1">`+ element.ec + `</td>
            //         <td class="col-sm-1">`+ element.bname + `</td>
            //         <td class="col-sm-1">` + element.url + `</td>
            //         <td class="col-sm-1">`+ element.verificationStatus + `</td>
            //         <td class="col-sm-1">`+ element.verificationDate + `</td>
            //         <td class="col-sm-2">`+ element.validatedBy + `</td>
            //     </tr>
            //     `;

            rows += `
                <tr style=`+ style + `>
                    <td  style=`+ style2 + ` class="col-sm-1">` + element.number + `</td>
                    <td class="col-sm-1">` + element.statusCode1 + `</td>
                    <td class="col-sm-1">` + element.statusCode2 + `</td>
                    <td class="col-sm-1">` + element.url + `</td>
                    <td class="col-sm-1">`+ element.verificationStatus + `</td>
                    <td class="col-sm-1">`+ element.verificationDate + `</td>
                    <td class="col-sm-2">`+ element.validatedBy + `</td>
                </tr>
                `;
        });
        var percentage = results.length / (linksCount / 100);

        if (percentage > 0) {
            $("#result").show();
            $("#spinner").hide();
        }




        // var html = `
        //         <div id="progress" class="progress">
        //           <div id="progress-in" class="progress-bar progress-bar-info progress-bar-striped" role="progressbar"
        //           aria-valuenow="`+ percentage + `" aria-valuemin="0" aria-valuemax="100" style="width:` + percentage + `%">
        //             `+ results.length + `/` + linksCount + ` - ` + Math.round(percentage - 1) + `% 
        //           </div>
        //         </div>
        //         <table id="table" class="table table-bordered table-fixed">
        //                 <thead>
        //                     <th class="col-sm-1 text-center">UUID</th>
        //                     <th class="col-sm-1 text-center">LINK</th>
        //                     <th class="col-sm-1 text-center">USER</th>
        //                     <th class="col-sm-2 text-center">VERIFICATION TIMESTAMP</th>
        //                     <th class="col-sm-1 text-center">QC</th>
        //                     <th class="col-sm-1 text-center">ERROR CODES</th>
        //                     <th class="col-sm-1 text-center">BUSINESS NAME</th>
        //                     <th class="col-sm-1 text-center">FIX URL</th>
        //                     <th class="col-sm-1 text-center">VERIFICATION STATUS</th>
        //                     <th class="col-sm-1 text-center">VERIFICATION DATE</th>
        //                     <th class="col-sm-2 text-center">VERIFIED BY</th>
        //                 </thead>
        //                 <tbody id="table-body" style="margin-top:50px; color:white;">
        //                 `+ rows + `
        //                 </tbody>
        //         </table>`

        var html = `
                <div id="progress" class="progress">
                  <div id="progress-in" class="progress-bar progress-bar-info progress-bar-striped" role="progressbar"
                  aria-valuenow="`+ percentage + `" aria-valuemin="0" aria-valuemax="100" style="width:` + percentage + `%">
                    `+ results.length + `/` + linksCount + ` - ` + Math.round(percentage - 1) + `% 
                  </div>
                </div>
                <table id="table" class="table table-bordered table-fixed">
                        <thead>
                            <th class="col-sm-1 text-center">NUMBER</th>
                            <th class="col-sm-1 text-center">STATUS CODE 1</th>
                            <th class="col-sm-1 text-center">STATUS CODE 2</th>
                            <th class="col-sm-1 text-center">FIX URL</th>
                            <th class="col-sm-1 text-center">VERIFICATION STATUS</th>
                            <th class="col-sm-1 text-center">VERIFICATION DATE</th>
                            <th class="col-sm-2 text-center">VERIFIED BY</th>
                        </thead>
                        <tbody id="table-body" style="margin-top:50px; color:white;">
                        `+ rows + `
                        </tbody>
                </table>`

        $("#result").html(html);

        if (results.length === linksCount) {
            selectElementContents(document.getElementById('table'));
            $("#result").html(html);
            $("#progress-in").text("COMPLETE. THE TABLE IS COPIED TO THE CLIPBOARD. " + brokenLinksCount + " PROBLEM LINKS");
            $("#progress").addClass("done");
            console.log(JSON.stringify(results));
            clearInterval(refreshIntervalId);
        }

        if (results.length !== linksCount) {
            $("#progress").val(results.length);
        }
    }, 200)

    getInfoButton.css("display", "none");
    $("#menutable").hide();
    $("#sheetDiv").hide();
});

function prepareData(data) {
    var code = $(data);
    var verificationMessage = code.find("#content > div.right-col > ul > li").last().text();
    var notVerifiedMessage = code.find("#content > div.right-col > p").text();

    if (notVerifiedMessage) {
        verificationMessage = notVerifiedMessage;
    }

    return gvi(verificationMessage);
}

function compare(a, b) {
    if (a.number < b.number)
        return -1;
    if (a.number > b.number)
        return 1;
    return 0;
}

function compareNumber(a, b) {
    if (a.number < b.number)
        return -1;
    if (a.number > b.number)
        return 1;
    return 0;
}

function compareNumberDesc(a, b) {
    if (a.number < b.number)
        return 1;
    if (a.number > b.number)
        return -1;
    return 0;
}

function compareName(a, b) {
    if (a.name < b.name)
        return -1;
    if (a.name > b.name)
        return 1;
    return 0;
}

function compareNameDesc(a, b) {
    if (a.name < b.name)
        return 1;
    if (a.name > b.name)
        return -1;
    return 0;
}

function selectElementContents(el) {
    var body = document.body, range, sel;
    if (document.createRange && window.getSelection) {
        range = document.createRange();
        sel = window.getSelection();
        sel.removeAllRanges();
        try {
            range.selectNodeContents(el);
            sel.addRange(range);
        } catch (e) {
            range.selectNode(el);
            sel.addRange(range);
        }
        document.execCommand("copy");

    } else if (body.createTextRange) {
        range = body.createTextRange();
        range.moveToElementText(el);
        range.select();
        range.execCommand("Copy");
    }
}

function replaceInvalidRows(header, element) {
    var text = element.val();
    text = text.replace(header, "\r\n");
    text = text.replace(/(?:(?:\r\n|\r|\n)\s*){2}/gm, "");
    element.val(text);
}

function formatDate(date) {
    var day = date.getDate();
    var monthIndex = date.getMonth();
    var year = date.getFullYear();
    var result = (monthIndex + 1) + "/" + day + "/" + year;
    if (result !== "NaN/NaN/NaN" && result != undefined) {
        return result;
    }
    else {
        return "";
    }
}

function buildInfo(data, element, initialStatus, status) {
    var info = prepareData(data);
    if (status === "fail") {
        return {
            "id": element.id,
            "number": element.number,
            "wasChanged": false,
            "needToCheck": false,
            "publisher": "",
            "idUrl": "",
            "initialUrl": element.url,
            "url": element.url,
            "status": status,
            "statusCode1": element.statusCode1,
            "statusCode2": element.statusCode2,
            "verificationStatus": "error",
            "verificationDate": "",
            "validatedBy": "",
            "method": "1",
            "sheetName": element.sheetName,
            "link": element.link,
            "user": element.user,
            "ts": element.ts,
            "bname": element.bname,
            "qc": element.qc,
            "ec": element.ec,
            "hasIdError": element.hasIdError
        }
    } else {
        return {
            "id": element.id,
            "number": element.number,
            "wasChanged": false,
            "needToCheck": false,
            "publisher": "",
            "idUrl": "",
            "initialUrl": element.url,
            "url": element.url,
            "status": status,
            "statusCode1": element.statusCode1,
            "statusCode2": element.statusCode2,
            "verificationStatus": info.verificationStatus,
            "verificationDate": info.verificationDate,
            "validatedBy": info.verifiedBy,
            "method": "1",
            "sheetName": element.sheetName,
            "link": element.link,
            "user": element.user,
            "ts": element.ts,
            "bname": element.bname,
            "qc": element.qc,
            "ec": element.ec,
            "hasIdError": element.hasIdError
        }
    }
}

function buildInfo2(data, element, initialStatus, status, url) {
    var info = prepareData(data);
    var wasChanged = false;
    var newUrl = "";
    var needToCheck = false;
    code = $(data);
    var publisherLinks = code.find("#content > div.left-col > p > a");
    publisherLinks.each(function (index) {
        if ($(this).text().includes(element.publisher)) {
            newUrl = $(this).prop("href");
            needToCheck = false;
            return false;
        } else {
            newUrl = code.find("#content > div.left-col > p > a").first().prop("href");
            needToCheck = true;
        }
    });
    if (newUrl) {
        url = newUrl;
    } else {
        url = element.url;
    }

    if (element.url === url) {
        wasChanged = false;
    } else {
        wasChanged = true;
    }

    if (status === "fail") {
        return {
            "id": element.id,
            "number": element.number,
            "wasChanged": wasChanged,
            "needToCheck": needToCheck,
            "publisher": element.publisher,
            "idUrl": url,
            "initialUrl": element.url,
            "url": url,
            "status": status,
            "statusCode1": element.statusCode1,
            "statusCode2": element.statusCode2,
            "verificationStatus": "error",
            "verificationDate": info.verificationDate,
            "validatedBy": info.verifiedBy,
            "method": "2",
            "sheetName": element.sheetName,
            "link": element.link,
            "user": element.user,
            "ts": element.ts,
            "bname": element.bname,
            "qc": element.qc,
            "ec": element.ec,
            "hasIdError": element.hasIdError
        }
    } else {
        return {
            "id": element.id,
            "number": element.number,
            "wasChanged": wasChanged,
            "needToCheck": false,
            "publisher": element.publisher,
            "idUrl": url,
            "initialUrl": element.url,
            "url": url,
            "status": "fail",
            "statusCode1": element.statusCode1,
            "statusCode2": element.statusCode2,
            "verificationStatus": info.verificationStatus,
            "verificationDate": info.verificationDate,
            "validatedBy": info.verifiedBy,
            "method": "2",
            "sheetName": element.sheetName,
            "link": element.link,
            "user": element.user,
            "ts": element.ts,
            "bname": element.bname,
            "qc": element.qc,
            "ec": element.ec,
            "hasIdError": element.hasIdError
        }
    }
}