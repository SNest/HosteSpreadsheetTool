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
var workWeeks = [];
var errors = [];

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
    <button id="getReportButton" type="button" class="btn">GET REPORT</button>
    <div id="result"></div>

    </div>`);

var getInfoButton = $("#getInfoButton");
var getReportButton = $("#getReportButton");

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
        $("#getReportButton").show();
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
$("#getReportButton").hide();
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
                    }
                    catch (err) {
                        console.log("error: " + JSON.stringify(element));
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

                },
                complete: function (xhr, textStatus) {
                    var theStatus = xhr.status;
                    if (textStatus == "success") {
                        initialStatus = "success";

                        if (url !== businessUrlBase) {
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
                            results.push(buildInfo(null, element, initialStatus, textStatus));
                        }
                    } else {
                        initialStatus = "fail";

                        if (url !== businessUrlBase) {
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
                        } else {
                            results.push(buildInfo2(null, element, initialStatus, textStatus, url));
                        }
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

    getInfoButton.css("display", "none");
    getReportButton.css("display", "none");
    $("#menutable").hide();
    $("#sheetDiv").hide();

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

            if (element.verificationStatus === "unverifiable" ||
                element.verificationStatus === "not verified" ||
                element.verificationStatus === "queued") {

                if (!element.wasChanged) {
                    style = "background-color:#F0AD4E;";
                } else {
                    style = "background-color:#F7D6A6;";
                }
            } else {
                if (element.verificationStatus === "page not found") {
                    if (!element.wasChanged) {
                        style = "background-color:#FF0000;";
                    } else {
                        style = "background-color:#FF0000;";
                    }
                } else {
                    if (element.verificationStatus === "need a manual check") {
                        style = "background-color:#563D7C;";
                    } else {
                        if (!element.wasChanged) {
                            style = "background-color:#5CB85C;";
                        } else {
                            style = "background-color:#ADDBAD;";
                        }
                    }
                }
            }

            if (element.needToCheck) {
                style = "background-color:#5BC0DE;";
            }

            if (element.verificationStatus == "page not found") {
                brokenLinksCount++;
            }
            var sc1 = statusCodes1[element.number - 1];

            rows += `
                <tr style=`+ style + `>
                    <td  style=`+ style2 + ` class="col-sm-1">` + element.id + `</td>
                    <td class="col-sm-1"><a target="_blank" href=`+ element.link +`>`+ element.link + `</a></td>
                    <td class="col-sm-1 text-center">`+ element.user + `</td>
                    <td class="col-sm-2 text-center">`+ element.ts + `</td>
                    <td class="col-sm-1 text-center">`+ element.qc + `</td>
                    <td class="col-sm-1 text-center">`+ element.ec + `</td>
                    <td class="col-sm-1">`+ element.bname + `</td>
                    <td class="col-sm-1"><a target="_blank" href=`+ element.url +`>` + element.url + `</a></td>
                    <td class="col-sm-1 text-center">`+ element.verificationStatus + `</td>
                    <td class="col-sm-1 text-center">`+ element.verificationDate + `</td>
                    <td class="col-sm-2 text-center">`+ element.validatedBy + `</td>
                </tr>
                `;

        });
        var percentage = results.length / (linksCount / 100);

        if (percentage > 0) {
            $("#result").show();
            $("#spinner").hide();
        }

        var html = `
                <div id="progress" class="progress">
                  <div id="progress-in" class="progress-bar progress-bar-info progress-bar-striped" role="progressbar"
                  aria-valuenow="`+ percentage + `" aria-valuemin="0" aria-valuemax="100" style="width:` + percentage + `%">
                    `+ results.length + `/` + linksCount + ` - ` + Math.round(percentage - 1) + `% 
                  </div>
                </div>
                <table id="table" class="table table-bordered table-fixed">
                        <thead>
                            <th class="col-sm-1 text-center">UUID</th>
                            <th class="col-sm-1 text-center">LINK</th>
                            <th class="col-sm-1 text-center">USER</th>
                            <th class="col-sm-2 text-center">VERIFICATION TIMESTAMP</th>
                            <th class="col-sm-1 text-center">QC</th>
                            <th class="col-sm-1 text-center">ERROR CODES</th>
                            <th class="col-sm-1 text-center">BUSINESS NAME</th>
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
            $("#progress-in").text("COMPLETE. THE TABLE IS COPIED TO THE CLIPBOARD. ");
            $("#progress").addClass("done");
            console.log(JSON.stringify(results));
            clearInterval(refreshIntervalId);
        }

        if (results.length !== linksCount) {
            $("#progress").val(results.length);
        }
    }, 200)


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

function compareUser(a, b) {
    if (a.user < b.user)
        return -1;
    if (a.user > b.user)
        return 1;
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
    var verificationStatus = "";
    var verificationDate = "";
    var validatedBy = "";
    if (element.statusCode2 == undefined || element.statusCode2 == "0") {
        verificationStatus = "need a manual check";
    }
    if (element.statusCode2 == "404") {
        verificationStatus = "page not found";
    }
    if (element.statusCode2 == "200") {
        verificationStatus = info.verificationStatus;
        verificationDate = info.verificationDate;
        validatedBy = info.verifiedBy;
    }

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
        "verificationStatus": verificationStatus,
        "verificationDate": verificationDate,
        "validatedBy": validatedBy,
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

    var verificationStatus = "";
    var verificationDate = "";
    var validatedBy = "";

    if (element.statusCode2 == undefined || element.statusCode2 == "0") {
        verificationStatus = "need a manual check";
    }
    if (element.statusCode2 == "404") {
        verificationStatus = "page not found";
    }
    if (element.statusCode2 == "200") {
        verificationStatus = info.verificationStatus;
        verificationDate = info.verificationDate;
        validatedBy = info.verifiedBy;
    }

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
        "verificationStatus": verificationStatus,
        "verificationDate": verificationDate,
        "validatedBy": validatedBy,
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

getReportButton.click(function () {

    $("#sheetTable").hide();
    $("#result").hide();
    $("#spinner").show();

    getReportButton.css("display", "none");
    getInfoButton.css("display", "none");
    $("#menutable").hide();
    $("#sheetDiv").hide();

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

        var percentage = results.length / (linksCount / 100);

        if (percentage > 0) {
            $("#result").show();
            $("#spinner").hide();
        }

        workWeeks = prepareWorkWeeks();

        weekHeadRows = "";
        weekSubHeadRows = "";
        var index = 25;
        workWeeks.forEach(function (workWeek) {
            var weekStart = workWeek.weekStart.substring(0, workWeek.weekStart.length - 3);
            var weekEnd = workWeek.weekEnd.substring(0, workWeek.weekStart.length - 3);
            weekHeadRows += "<th class='text-center no-wrap' ><small>" + weekStart + "-" + weekEnd + "</small></th>";
            weekSubHeadRows += "<th class='text-center no-wrap'>WEEK " + (index++) + "</th>";
        });

        var rows = prepareRows(results);

        var html = `
                <div id="progress" class="progress">
                  <div id="progress-in" class="progress-bar progress-bar-info progress-bar-striped" role="progressbar"
                  aria-valuenow="`+ percentage + `" aria-valuemin="0" aria-valuemax="100" style="width:` + percentage + `%">
                    `+ results.length + `/` + linksCount + ` - ` + Math.round(percentage - 1) + `% 
                  </div>
                </div>
                <table id="table2" class="table table-bordered table-fixed">
                         <thead>
                            <tr>
                                <th class="text-right">EMPLOYEE</th>
                                <th class="text-center"></th>
                                `+ weekSubHeadRows + `
                                <th class="text-center">TOTAL</th>
                                <th class="text-center"></th>
                                `+ weekSubHeadRows + `
                                <th class="text-center">TOTAL</th>
                                <th class="text-center"></th>
                                <th class="text-center">ADDRESS</th>
                                <th class="text-center">ADDRESS ABBREVIATION</th>
                                <th class="text-center">BUSINESS DESCRIPTION</th>
                                <th class="text-center">BUSINESS NAME</th>
                                <th class="text-center">CATEGORY</th>
                                <th class="text-center">FB</th>
                                <th class="text-center">TWITTER</th>
                                <th class="text-center">YT</th>
                                <th class="text-center">LINK</th>
                                <th class="text-center">PHONE NUMBER</th>
                                <th class="text-center">POSTAL CODE</th>
                                <th class="text-center">REGION</th>
                                <th class="text-center">WEBSITE</th>
                                <th class="text-center">WH</th>
                                <th class="text-center">GUIDELINES</th>
                                <th class="text-center">CORPORATE VS. LOCAL </th>
                                <th class="text-center">GRAMMAR</th>
                                <th class="text-center">YELP</th>
                                <th class="text-center">PAGE NOT FOUND</th>
                                <th class="text-center">UNVERIFIABLE</th>
                                <th class="text-center">NOT VERIFIED</th>
                                <th class="text-center">NEED A MANUAL CHECK</th>
                                <th class="text-center">TOTAL</th>
                            </tr>
                            <tr>
                                <th class="text-center"></th>
                                <th class="text-center"></th>
                                `+ weekHeadRows + `
                                <th class="text-center  no-wrap"><small>`+ workWeeks[0].weekStart.substring(0, workWeeks[0].weekStart.length - 3) + "-" + workWeeks[workWeeks.length - 1].weekEnd.substring(0, workWeeks[workWeeks.length - 1].weekStart.length - 3) + `</small></th>
                                <th class="text-center"></th>
                                `+ weekHeadRows + `
                                <th class="text-center  no-wrap"><small>`+ workWeeks[0].weekStart.substring(0, workWeeks[0].weekStart.length - 3) + "-" + workWeeks[workWeeks.length - 1].weekEnd.substring(0, workWeeks[workWeeks.length - 1].weekStart.length - 3) + `</small></th>
                                <th class="text-center"></th>
                                <th class="text-center"><small>1</small></th>
                                <th class="text-center"><small>2</small></th>
                                <th class="text-center"><small>3</small></th>
                                <th class="text-center"><small>4</small></th>
                                <th class="text-center"><small>5</small></th>
                                <th class="text-center"><small>6</small></th>
                                <th class="text-center"><small>7</small></th>
                                <th class="text-center"><small>8</small></th>
                                <th class="text-center"><small>9</small></th>
                                <th class="text-center"><small>10</small></th>
                                <th class="text-center"><small>11</small></th>
                                <th class="text-center"><small>12</small></th>
                                <th class="text-center"><small>13</small></th>
                                <th class="text-center"><small>14</small></th>
                                <th class="text-center"><small>15</small></th>
                                <th class="text-center"><small>16</small></th>
                                <th class="text-center"><small>17</small></th>
                                <th class="text-center"><small>18</small></th>
                                <th class="text-center"><small>19</small></th>
                                <th class="text-center"><small>20</small></th>
                                <th class="text-center"><small>21</small></th>
                                <th class="text-center"><small>22</small></th>
                                <th class="text-center"></th>
                            </tr>
                        </thead>
                        <tbody id="table-body" style="margin-top:50px; color:black;">
                            `+ rows + `
                        </tbody>
                </table>`

        $("#result").html(html);


        if (results.length === linksCount) {
            selectElementContents(document.getElementById('table2'));

            var rows = prepareRows(results);

            var html = `
                <div id="progress" class="progress">
                  <div id="progress-in" class="progress-bar progress-bar-info progress-bar-striped" role="progressbar"
                  aria-valuenow="`+ percentage + `" aria-valuemin="0" aria-valuemax="100" style="width:` + percentage + `%">
                    `+ results.length + `/` + linksCount + ` - ` + Math.round(percentage - 1) + `% 
                  </div>
                </div>
                <table id="table2" class="table table-bordered table-fixed">
                          <thead>
                            <tr>
                                <th class="text-right">EMPLOYEE</th>
                                <th class="text-center"></th>
                                `+ weekSubHeadRows + `
                                <th class="text-center">TOTAL</th>
                                <th class="text-center"></th>
                                `+ weekSubHeadRows + `
                                <th class="text-center">TOTAL</th>
                                <th class="text-center"></th>
                                <th class="text-center">ADDRESS</th>
                                <th class="text-center">ADDRESS ABBREVIATION</th>
                                <th class="text-center">BUSINESS DESCRIPTION</th>
                                <th class="text-center">BUSINESS NAME</th>
                                <th class="text-center">CATEGORY</th>
                                <th class="text-center">FB</th>
                                <th class="text-center">TWITTER</th>
                                <th class="text-center">YT</th>
                                <th class="text-center">LINK</th>
                                <th class="text-center">PHONE NUMBER</th>
                                <th class="text-center">POSTAL CODE</th>
                                <th class="text-center">REGION</th>
                                <th class="text-center">WEBSITE</th>
                                <th class="text-center">WH</th>
                                <th class="text-center">GUIDELINES</th>
                                <th class="text-center">CORPORATE VS. LOCAL </th>
                                <th class="text-center">GRAMMAR</th>
                                <th class="text-center">YELP</th>
                                <th class="text-center">PAGE NOT FOUND</th>
                                <th class="text-center">UNVERIFIABLE</th>
                                <th class="text-center">NOT VERIFIED</th>
                                <th class="text-center">NEED A MANUAL CHECK</th>
                                <th class="text-center">TOTAL</th>
                            </tr>
                            <tr>
                                <th class="text-center"></th>
                                <th class="text-center"></th>
                                `+ weekHeadRows + `
                                <th class="text-center  no-wrap"><small>`+ workWeeks[0].weekStart.substring(0, workWeeks[0].weekStart.length - 3) + "-" + workWeeks[workWeeks.length - 1].weekEnd.substring(0, workWeeks[workWeeks.length - 1].weekStart.length - 3) + `</small></th>
                                <th class="text-center"></th>
                                `+ weekHeadRows + `
                                <th class="text-center  no-wrap"><small>`+ workWeeks[0].weekStart.substring(0, workWeeks[0].weekStart.length - 3) + "-" + workWeeks[workWeeks.length - 1].weekEnd.substring(0, workWeeks[workWeeks.length - 1].weekStart.length - 3) + `</small></th>
                                <th class="text-center"></th>
                                <th class="text-center"><small>1</small></th>
                                <th class="text-center"><small>2</small></th>
                                <th class="text-center"><small>3</small></th>
                                <th class="text-center"><small>4</small></th>
                                <th class="text-center"><small>5</small></th>
                                <th class="text-center"><small>6</small></th>
                                <th class="text-center"><small>7</small></th>
                                <th class="text-center"><small>8</small></th>
                                <th class="text-center"><small>9</small></th>
                                <th class="text-center"><small>10</small></th>
                                <th class="text-center"><small>11</small></th>
                                <th class="text-center"><small>12</small></th>
                                <th class="text-center"><small>13</small></th>
                                <th class="text-center"><small>14</small></th>
                                <th class="text-center"><small>15</small></th>
                                <th class="text-center"><small>16</small></th>
                                <th class="text-center"><small>17</small></th>
                                <th class="text-center"><small>18</small></th>
                                <th class="text-center"><small>19</small></th>
                                <th class="text-center"><small>20</small></th>
                                <th class="text-center"><small>21</small></th>
                                <th class="text-center"><small>22</small></th>
                                <th class="text-center"></th>
                            </tr>
                        </thead>
                        <tbody id="table-body" style="margin-top:50px; color:black;">
                            `+ rows + `
                        </tbody>
                </table>`

            $("#result").html(html);
            $("#progress-in").text("COMPLETE. THE TABLE IS COPIED TO THE CLIPBOARD. ");
            $("#progress").addClass("done");
            console.log(JSON.stringify(results));
            clearInterval(refreshIntervalId);
        }

        if (results.length !== linksCount) {
            $("#progress").val(results.length);
        }
    }, 200)
});

function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
}

function prepareRows(results) {
    var rows = '';
    var users = [];
    var user = 0;
    var total = 0;
    var address = 0;
    var addressAbbreviation = 0;
    var businessDescription = 0;
    var businessName = 0;
    var category = 0;
    var fb = 0;
    var twitter = 0;
    var yt = 0;
    var link = 0;
    var phoneNumber = 0;
    var postalCode = 0;
    var region = 0;
    var website = 0;
    var wh = 0;
    var guidelines = 0;
    var corporateVsLocal = 0;
    var grammar = 0;
    var yelp = 0;
    var manual = 0;
    var pageNotFound = 0;
    var notVerified = 0;
    var unverifiable = 0;

    users.push(
        {
            user: "UNDEFINED EMPLOYEE",
            total: 0,
            address: 0,
            addressAbbreviation: 0,
            businessDescription: 0,
            businessName: 0,
            category: 0,
            fb: 0,
            twitter: 0,
            yt: 0,
            link: 0,
            phoneNumber: 0,
            postalCode: 0,
            region: 0,
            website: 0,
            wh: 0,
            guidelines: 0,
            corporateVsLocal: 0,
            grammar: 0,
            yelp: 0,
            manual: 0,
            pageNotFound: 0,
            notVerified: 0,
            unverifiable: 0,
            records: [],
            errors: [],
            recordCounts: [],
            workWeeks: []
        });


    workWeeks.forEach(function (workWeek) {
        var t = _.filter(results, function (o) {

            if (o.verificationDate != undefined) {
                var verificationDate = moment(o.verificationDate);
                var isBeforeWeekEndDate = verificationDate < workWeek.weekEndDate.getTime();
                var isAfterWeekStartDate = verificationDate > workWeek.weekStartDate.getTime();

//alert(isAfterWeekStartDate + "\n" + verificationDate + "\n" + isBeforeWeekEndDate);

                var ttt = isBeforeWeekEndDate && isAfterWeekStartDate;
                return ttt;
            } else {
                return false;
            }
        });

       // alert(t.length)

    });

    results.forEach(function (element) {
        var user = "";
        if (element.validatedBy) {
            user = users.find(x => x.user == element.validatedBy);
        } else {
            user = users.find(x => x.user == "UNDEFINED EMPLOYEE");
        }

        if (!user) {
            users.push(
                {
                    user: element.validatedBy,
                    total: 0,
                    address: 0,
                    addressAbbreviation: 0,
                    businessDescription: 0,
                    businessName: 0,
                    category: 0,
                    fb: 0,
                    twitter: 0,
                    yt: 0,
                    link: 0,
                    phoneNumber: 0,
                    postalCode: 0,
                    region: 0,
                    website: 0,
                    wh: 0,
                    guidelines: 0,
                    corporateVsLocal: 0,
                    grammar: 0,
                    yelp: 0,
                    manual: 0,
                    pageNotFound: 0,
                    notVerified: 0,
                    unverifiable: 0,
                    records: [],
                    errors: [],
                    recordCounts: [],
                    workWeeks: []
                });
        }

        if (element.validatedBy) {
            user = users.find(x => x.user == element.validatedBy);
        } else {
            user = users.find(x => x.user == "UNDEFINED EMPLOYEE");
        }

        user.workWeeks = prepareWorkWeeks();

        var verificationDate = moment(element.verificationDate);

        var correctWorkWeekIndex = -1;
        workWeeks.forEach(function (workWeek, index) {

            var weekStartDate = moment(workWeek.weekStartDate);
            var weekEndDate = moment(workWeek.weekEndDate);

            if (verificationDate.isBefore(weekEndDate) && verificationDate.isAfter(weekStartDate)) {
                correctWorkWeekIndex = index;
            }
        })
        if (element.verificationStatus == "need a manual check") {
            user.manual++;
            manual++;
        }

        if (element.verificationStatus == "page not found") {
            user.pageNotFound++;
            pageNotFound++;
        }
        if (element.verificationStatus == "not verified") {
            user.notVerified++;
            notVerified++;
        }
        if (element.verificationStatus == "unverifiable") {
            user.unverifiable++;
            unverifiable++;
        }

        if (correctWorkWeekIndex >= 0) {
            user.records.push({ status: element.verificationStatus, workWeek: correctWorkWeekIndex });
        } else {
            user.records.push({ status: element.verificationStatus, workWeek: "" });
        }





        if (element.verificationStatus != "verified") {
            if (correctWorkWeekIndex >= 0) {
                user.workWeeks[correctWorkWeekIndex].errors++;
            } else {

            }
        }

        var trimed = element.ec.trim();

        var errorCodes = [];
        if (trimed.includes(",")) {
            errorCodes = trimed.split(',');
        } else {
            errorCodes = [trimed];
        }


        errorCodes.forEach(function (errorCode) {

            errorCode = errorCode.trim();
            if (errorCode == "1") {
                address++;
                user.address++;
                user.total++;
                total++;
                addErrorWithWeek(user, correctWorkWeekIndex, errorCode);
            }
            if (errorCode == "2") {
                addressAbbreviation++;
                user.addressAbbreviation++;
                user.total++;
                total++;
                addErrorWithWeek(user, correctWorkWeekIndex, errorCode);
            }
            if (errorCode == "3") {
                businessDescription++;
                user.businessDescription++;
                user.total++;
                addErrorWithWeek(user, correctWorkWeekIndex, errorCode);
            }
            if (errorCode == "4") {
                businessName++;
                user.businessName++;
                user.total++;
                total++;
                addErrorWithWeek(user, correctWorkWeekIndex, errorCode);
            }
            if (errorCode == "5") {
                category++;
                user.category++;
                user.total++;
                addErrorWithWeek(user, correctWorkWeekIndex, errorCode);
            }
            if (errorCode == "6") {
                fb++;
                user.fb++;
                user.total++;
                addErrorWithWeek(user, correctWorkWeekIndex, errorCode);
            }
            if (errorCode == "7") {
                twitter++;
                user.twitter++;
                user.total++;
                addErrorWithWeek(user, correctWorkWeekIndex, errorCode);
            }
            if (errorCode == "8") {
                yt++;
                user.yt++;
                user.total++;
                addErrorWithWeek(user, correctWorkWeekIndex, errorCode);
            }
            if (errorCode == "9") {
                link++;
                user.link++;
                user.total++;
                addErrorWithWeek(user, correctWorkWeekIndex, errorCode);
            }
            if (errorCode == "10") {
                phoneNumber++;
                user.phoneNumber++;
                user.total++;
                addErrorWithWeek(user, correctWorkWeekIndex, errorCode);
            }
            if (errorCode == "11") {
                postalCode++;
                user.postalCode++;
                user.total++;
                addErrorWithWeek(user, correctWorkWeekIndex, errorCode);
            }
            if (errorCode == "12") {
                region++;
                user.region++;
                user.total++;
                addErrorWithWeek(user, correctWorkWeekIndex, errorCode);
            }
            if (errorCode == "13") {
                website++;
                user.website++;
                user.total++;
                addErrorWithWeek(user, correctWorkWeekIndex, errorCode);
            }
            if (errorCode == "14") {
                wh++;
                user.wh++;
                user.total++;
                addErrorWithWeek(user, correctWorkWeekIndex, errorCode);
            }
            if (errorCode == "15") {
                guidelines++;
                user.guidelines++;
                user.total++;
                addErrorWithWeek(user, correctWorkWeekIndex, errorCode);
            }
            if (errorCode == "16") {
                corporateVsLocal++;
                user.corporateVsLocal++;
                user.total++;
                addErrorWithWeek(user, correctWorkWeekIndex, errorCode);
            }
            if (errorCode == "17") {
                grammar++;
                user.grammar++;
                user.total++;
                addErrorWithWeek(user, correctWorkWeekIndex, errorCode);
            }
            if (errorCode == "18") {
                yelp++;
                user.yelp++;
                user.total++;
                addErrorWithWeek(user, correctWorkWeekIndex, errorCode);
            }
        })

    });

    users.sort(compareUser);

    var goodNumber = 0;
    var userTotalGoodNumber = 0;
    var totalGoodNumber = 0;
    var superTotalGoodNumber = 0;

    var badNumber = 3;
    var userTotalBadNumber = 24;
    var totalBadNumber = 3 * users.length;
    var superTotalBadNumber = userTotalBadNumber * totalBadNumber;

    var cells2 = "";

    users.forEach(function (element) {
        var cells = "";

        cells += "<td class='text-right'>" + element.user + "</td>";

        cells += "<th class='text-center'></th>";



        workWeeks.forEach(function (wordWeek, index) {
            var counter = 0;
            for (var i = 0; i < element.records.length; i++) {
                if (element.records[i].workWeek == index) {
                    counter++;

                }
            }
            element.recordCounts.push(counter);

            cells += "<td class='text-center'>" + counter + "</td>";


        });





        cells += "<td class='text-center total'>" + element.records.length + "</td><th></th>";



        workWeeks.forEach(function (workWeek, index) {
            // users.forEach(function (user) {
            //     workWeeks[index].notVerifiedRecords;
            //     //  alert(JSON.stringify(user.workWeeks[index]));
            // });
            cells += "<td class='text-center'>" + "</td>";
        });

        cells += "<td class='text-center total'>" + (element.total + element.manual + element.unverifiable + element.pageNotFound + element.notVerified) + "</td><th></th>";

        element.total += element.manual + element.notVerified + element.unverifiable + element.pageNotFound;

        if (element.address <= goodNumber) {
            cells += "<td class='text-center good'>" + element.address + "</td>";
        } else {
            if (element.address <= badNumber) {
                cells += "<td class='text-center bad'>" + element.address + "</td>";
            } else {
                cells += "<td class='text-center worse'>" + element.address + "</td>";
            }
        }

        if (element.addressAbbreviation <= goodNumber) {
            cells += "<td class='text-center good'>" + element.addressAbbreviation + "</td>";
        } else {
            if (element.addressAbbreviation <= badNumber) {
                cells += "<td class='text-center bad'>" + element.addressAbbreviation + "</td>";
            } else {
                cells += "<td class='text-center worse'>" + element.addressAbbreviation + "</td>";
            }
        }

        if (element.businessDescription <= goodNumber) {
            cells += "<td class='text-center good'>" + element.businessDescription + "</td>";
        } else {
            if (element.businessDescription <= badNumber) {
                cells += "<td class='text-center bad'>" + element.businessDescription + "</td>";
            } else {
                cells += "<td class='text-center worse'>" + element.businessDescription + "</td>";
            }
        }

        if (element.businessName <= goodNumber) {
            cells += "<td class='text-center good'>" + element.businessName + "</td>";
        } else {
            if (element.businessName <= badNumber) {
                cells += "<td class='text-center bad'>" + element.businessName + "</td>";
            } else {
                cells += "<td class='text-center worse'>" + element.businessName + "</td>";
            }
        }

        if (element.category <= goodNumber) {
            cells += "<td class='text-center good'>" + element.category + "</td>";
        } else {
            if (element.category <= badNumber) {
                cells += "<td class='text-center bad'>" + element.category + "</td>";
            } else {
                cells += "<td class='text-center worse'>" + element.category + "</td>";
            }
        }

        if (element.fb <= goodNumber) {
            cells += "<td class='text-center good'>" + element.fb + "</td>";
        } else {
            if (element.fb <= badNumber) {
                cells += "<td class='text-center bad'>" + element.fb + "</td>";
            } else {
                cells += "<td class='text-center worse'>" + element.fb + "</td>";
            }
        }

        if (element.twitter <= goodNumber) {
            cells += "<td class='text-center good'>" + element.twitter + "</td>";
        } else {
            if (element.twitter <= badNumber) {
                cells += "<td class='text-center bad'>" + element.twitter + "</td>";
            } else {
                cells += "<td class='text-center worse'>" + element.twitter + "</td>";
            }
        }

        if (element.yt <= goodNumber) {
            cells += "<td class='text-center good'>" + element.yt + "</td>";
        } else {
            if (element.yt <= badNumber) {
                cells += "<td class='text-center bad'>" + element.yt + "</td>";
            } else {
                cells += "<td class='text-center worse'>" + element.yt + "</td>";
            }
        }

        if (element.link <= goodNumber) {
            cells += "<td class='text-center good'>" + element.link + "</td>";
        } else {
            if (element.link <= badNumber) {
                cells += "<td class='text-center bad'>" + element.link + "</td>";
            } else {
                cells += "<td class='text-center worse'>" + element.link + "</td>";
            }
        }

        if (element.phoneNumber <= goodNumber) {
            cells += "<td class='text-center good'>" + element.phoneNumber + "</td>";
        } else {
            if (element.phoneNumber <= badNumber) {
                cells += "<td class='text-center bad'>" + element.phoneNumber + "</td>";
            } else {
                cells += "<td class='text-center worse'>" + element.phoneNumber + "</td>";
            }
        }

        if (element.postalCode <= goodNumber) {
            cells += "<td class='text-center good'>" + element.postalCode + "</td>";
        } else {
            if (element.postalCode <= badNumber) {
                cells += "<td class='text-center bad'>" + element.postalCode + "</td>";
            } else {
                cells += "<td class='text-center worse'>" + element.postalCode + "</td>";
            }
        }

        if (element.region <= goodNumber) {
            cells += "<td class='text-center good'>" + element.region + "</td>";
        } else {
            if (element.region <= badNumber) {
                cells += "<td class='text-center bad'>" + element.region + "</td>";
            } else {
                cells += "<td class='text-center worse'>" + element.region + "</td>";
            }
        }

        if (element.website <= goodNumber) {
            cells += "<td class='text-center good'>" + element.website + "</td>";
        } else {
            if (element.website <= badNumber) {
                cells += "<td class='text-center bad'>" + element.website + "</td>";
            } else {
                cells += "<td class='text-center worse'>" + element.website + "</td>";
            }
        }

        if (element.wh <= goodNumber) {
            cells += "<td class='text-center good'>" + element.wh + "</td>";
        } else {
            if (element.wh <= badNumber) {
                cells += "<td class='text-center bad'>" + element.wh + "</td>";
            } else {
                cells += "<td class='text-center worse'>" + element.wh + "</td>";
            }
        }

        if (element.guidelines <= goodNumber) {
            cells += "<td class='text-center good'>" + element.guidelines + "</td>";
        } else {
            if (element.guidelines <= badNumber) {
                cells += "<td class='text-center bad'>" + element.guidelines + "</td>";
            } else {
                cells += "<td class='text-center worse'>" + element.guidelines + "</td>";
            }
        }

        if (element.corporateVsLocal <= goodNumber) {
            cells += "<td class='text-center good'>" + element.corporateVsLocal + "</td>";
        } else {
            if (element.corporateVsLocal <= badNumber) {
                cells += "<td class='text-center bad'>" + element.corporateVsLocal + "</td>";
            } else {
                cells += "<td class='text-center worse'>" + element.corporateVsLocal + "</td>";
            }
        }

        if (element.grammar <= goodNumber) {
            cells += "<td class='text-center good'>" + element.grammar + "</td>";
        } else {
            if (element.grammar <= badNumber) {
                cells += "<td class='text-center bad'>" + element.grammar + "</td>";
            } else {
                cells += "<td class='text-center worse'>" + element.grammar + "</td>";
            }
        }

        if (element.yelp <= goodNumber) {
            cells += "<td class='text-center good'>" + element.yelp + "</td>";
        } else {
            if (element.yelp <= badNumber) {
                cells += "<td class='text-center bad'>" + element.yelp + "</td>";
            } else {
                cells += "<td class='text-center worse'>" + element.yelp + "</td>";
            }
        }

        if (element.pageNotFound <= goodNumber) {
            cells += "<td class='text-center good'>" + element.pageNotFound + "</td>";
        } else {
            if (element.pageNotFound <= badNumber) {
                cells += "<td class='text-center bad'>" + element.pageNotFound + "</td>";
            } else {
                cells += "<td class='text-center worse'>" + element.pageNotFound + "</td>";
            }
        }

        if (element.unverifiable <= goodNumber) {
            cells += "<td class='text-center good'>" + element.unverifiable + "</td>";
        } else {
            if (element.unverifiable <= badNumber) {
                cells += "<td class='text-center bad'>" + element.unverifiable + "</td>";
            } else {
                cells += "<td class='text-center worse'>" + element.unverifiable + "</td>";
            }
        }

        if (element.notVerified <= goodNumber) {
            cells += "<td class='text-center good'>" + element.notVerified + "</td>";
        } else {
            if (element.notVerified <= badNumber) {
                cells += "<td class='text-center bad'>" + element.notVerified + "</td>";
            } else {
                cells += "<td class='text-center worse'>" + element.notVerified + "</td>";
            }
        }

        if (element.manual <= goodNumber) {
            cells += "<td class='text-center good'>" + element.manual + "</td>";
        } else {
            if (element.manual <= badNumber) {
                cells += "<td class='text-center bad'>" + element.manual + "</td>";
            } else {
                cells += "<td class='text-center worse'>" + element.manual + "</td>";
            }
        }

        if (element.total <= userTotalGoodNumber) {
            cells += "<td class='text-center total good'><b>" + element.total + "</b></td>";
        } else {
            if (element.total <= userTotalBadNumber) {
                cells += "<td class='text-center  total  bad'><b>" + element.total + "</b></td>";
            } else {
                cells += "<td class='text-center  total  worse'><b>" + element.total + "</b></td>";
            }
        }

        rows += `<tr>` + cells + `</tr>`;
    });

    workWeeks.forEach(function (workWeek, index) {
        var usersWeekRecords = 0;
        users.forEach(function (user) {
            usersWeekRecords += user.recordCounts[index];
        });
        cells2 += "<td class='text-center total'>" + usersWeekRecords + "</td>";
    });
    cells2 += "<td class='text-center total'>" + results.length + "</td><th></th>";

    workWeeks.forEach(function () {
        cells2 += "<td class='text-center total'></td>";
    });
    cells2 += "<td class='text-center total'>" + (total + manual + unverifiable + pageNotFound + notVerified) + "</td><th></th>";

    total += manual + pageNotFound + unverifiable + notVerified;

    if (address <= totalGoodNumber) {
        cells2 += "<td class='text-center total good'>" + address + "</td>";
    } else {
        if (address <= totalBadNumber) {
            cells2 += "<td class='text-center total bad'>" + address + "</td>";
        } else {
            cells2 += "<td class='text-center total worse'>" + address + "</td>";
        }
    }

    if (addressAbbreviation <= totalGoodNumber) {
        cells2 += "<td class='text-center total good'>" + addressAbbreviation + "</td>";
    } else {
        if (addressAbbreviation <= totalBadNumber) {
            cells2 += "<td class='text-center total bad'>" + addressAbbreviation + "</td>";
        } else {
            cells2 += "<td class='text-center total worse'>" + addressAbbreviation + "</td>";
        }
    }

    if (businessDescription <= totalGoodNumber) {
        cells2 += "<td class='text-center total good'>" + businessDescription + "</td>";
    } else {
        if (businessDescription <= totalBadNumber) {
            cells2 += "<td class='text-center total bad'>" + businessDescription + "</td>";
        } else {
            cells2 += "<td class='text-center total worse'>" + businessDescription + "</td>";
        }
    }

    if (businessName <= totalGoodNumber) {
        cells2 += "<td class='text-center total good'>" + businessName + "</td>";
    } else {
        if (businessName <= totalBadNumber) {
            cells2 += "<td class='text-center total bad'>" + businessName + "</td>";
        } else {
            cells2 += "<td class='text-center  total worse'>" + businessName + "</td>";
        }
    }

    if (category <= totalGoodNumber) {
        cells2 += "<td class='text-center total  good'>" + category + "</td>";
    } else {
        if (category <= totalBadNumber) {
            cells2 += "<td class='text-center total  bad'>" + category + "</td>";
        } else {
            cells2 += "<td class='text-center  total worse'>" + category + "</td>";
        }
    }

    if (fb <= totalGoodNumber) {
        cells2 += "<td class='text-center total  good'>" + fb + "</td>";
    } else {
        if (fb <= totalBadNumber) {
            cells2 += "<td class='text-center bad'>" + fb + "</td>";
        } else {
            cells2 += "<td class='text-center total  worse'>" + fb + "</td>";
        }
    }

    if (twitter <= totalGoodNumber) {
        cells2 += "<td class='text-center total  good'>" + twitter + "</td>";
    } else {
        if (twitter <= totalBadNumber) {
            cells2 += "<td class='text-center total  bad'>" + twitter + "</td>";
        } else {
            cells2 += "<td class='text-center total  worse'>" + twitter + "</td>";
        }
    }

    if (yt <= totalGoodNumber) {
        cells2 += "<td class='text-center total  good'>" + yt + "</td>";
    } else {
        if (yt <= totalBadNumber) {
            cells2 += "<td class='text-center total  bad'>" + yt + "</td>";
        } else {
            cells2 += "<td class='text-center  total worse'>" + yt + "</td>";
        }
    }

    if (link <= totalGoodNumber) {
        cells2 += "<td class='text-center total  good'>" + link + "</td>";
    } else {
        if (link <= totalBadNumber) {
            cells2 += "<td class='text-center total  bad'>" + link + "</td>";
        } else {
            cells2 += "<td class='text-center  total worse'>" + link + "</td>";
        }
    }

    if (phoneNumber <= totalGoodNumber) {
        cells2 += "<td class='text-center total  good'>" + phoneNumber + "</td>";
    } else {
        if (phoneNumber <= totalBadNumber) {
            cells2 += "<td class='text-center total  bad'>" + phoneNumber + "</td>";
        } else {
            cells2 += "<td class='text-center total  worse'>" + phoneNumber + "</td>";
        }
    }

    if (postalCode <= totalGoodNumber) {
        cells2 += "<td class='text-center total  good'>" + postalCode + "</td>";
    } else {
        if (postalCode <= totalBadNumber) {
            cells2 += "<td class='text-center total  bad'>" + postalCode + "</td>";
        } else {
            cells2 += "<td class='text-center total  worse'>" + postalCode + "</td>";
        }
    }

    if (region <= totalGoodNumber) {
        cells2 += "<td class='text-center total  good'>" + region + "</td>";
    } else {
        if (region <= totalBadNumber) {
            cells2 += "<td class='text-center total  bad'>" + region + "</td>";
        } else {
            cells2 += "<td class='text-center total  worse'>" + region + "</td>";
        }
    }

    if (website <= totalGoodNumber) {
        cells2 += "<td class='text-center  total good'>" + website + "</td>";
    } else {
        if (website <= totalBadNumber) {
            cells2 += "<td class='text-center  total bad'>" + website + "</td>";
        } else {
            cells2 += "<td class='text-center total  worse'>" + website + "</td>";
        }
    }

    if (wh <= totalGoodNumber) {
        cells2 += "<td class='text-center total  good'>" + wh + "</td>";
    } else {
        if (wh <= totalBadNumber) {
            cells2 += "<td class='text-center  total bad'>" + wh + "</td>";
        } else {
            cells2 += "<td class='text-center total  worse'>" + wh + "</td>";
        }
    }

    if (guidelines <= totalGoodNumber) {
        cells2 += "<td class='text-center total  good'>" + guidelines + "</td>";
    } else {
        if (guidelines <= totalBadNumber) {
            cells2 += "<td class='text-center total  bad'>" + guidelines + "</td>";
        } else {
            cells2 += "<td class='text-center total  worse'>" + guidelines + "</td>";
        }
    }

    if (corporateVsLocal <= totalGoodNumber) {
        cells2 += "<td class='text-center  total good'>" + corporateVsLocal + "</td>";
    } else {
        if (corporateVsLocal <= totalBadNumber) {
            cells2 += "<td class='text-center total  bad'>" + corporateVsLocal + "</td>";
        } else {
            cells2 += "<td class='text-center  total worse'>" + corporateVsLocal + "</td>";
        }
    }

    if (grammar <= totalGoodNumber) {
        cells2 += "<td class='text-center total  good'>" + grammar + "</td>";
    } else {
        if (grammar <= totalBadNumber) {
            cells2 += "<td class='text-center total  bad'>" + grammar + "</td>";
        } else {
            cells2 += "<td class='text-center total  worse'>" + grammar + "</td>";
        }
    }

    if (yelp <= totalGoodNumber) {
        cells2 += "<td class='text-center  total good'>" + yelp + "</td>";
    } else {
        if (yelp <= totalBadNumber) {
            cells2 += "<td class='text-center total  bad'>" + yelp + "</td>";
        } else {
            cells2 += "<td class='text-center total  worse'>" + yelp + "</td>";
        }
    }

    if (pageNotFound <= goodNumber) {
        cells2 += "<td class='text-center good'>" + pageNotFound + "</td>";
    } else {
        if (pageNotFound <= badNumber) {
            cells2 += "<td class='text-center bad'>" + pageNotFound + "</td>";
        } else {
            cells2 += "<td class='text-center worse'>" + pageNotFound + "</td>";
        }
    }

    if (unverifiable <= goodNumber) {
        cells2 += "<td class='text-center good'>" + unverifiable + "</td>";
    } else {
        if (unverifiable <= badNumber) {
            cells2 += "<td class='text-center bad'>" + unverifiable + "</td>";
        } else {
            cells2 += "<td class='text-center worse'>" + unverifiable + "</td>";
        }
    }

    if (notVerified <= goodNumber) {
        cells2 += "<td class='text-center good'>" + notVerified + "</td>";
    } else {
        if (notVerified <= badNumber) {
            cells2 += "<td class='text-center bad'>" + notVerified + "</td>";
        } else {
            cells2 += "<td class='text-center worse'>" + notVerified + "</td>";
        }
    }

    if (manual <= goodNumber) {
        cells2 += "<td class='text-center good'>" + manual + "</td>";
    } else {
        if (manual <= badNumber) {
            cells2 += "<td class='text-center bad'>" + manual + "</td>";
        } else {
            cells2 += "<td class='text-center worse'>" + manual + "</td>";
        }
    }

    if (total <= superTotalGoodNumber) {
        cells2 += "<td class='text-center total  good'>" + total + "</td>";
    } else {
        if (total <= superTotalBadNumber) {
            cells2 += "<td class='text-center  total  bad'>" + total + "</td>";
        } else {
            cells2 += "<td class='text-center  total worse'>" + total + "</td>";
        }
    }

    rows += `
        <tr>
            <th class="text-right">TOTAL</th>
            <th></th>
            `+ cells2 + `
        </tr>`;


    return rows;
}

function prepareWorkWeeks() {
    var workWeeks = [];
    var initialWeekStart = new Date(2017, 5, 26);
    var initialWeekEnd = new Date(2017, 6, 2);

    for (var i = 0; i < 60; i++) {
        if (i == 0) {
            var wsDay = initialWeekStart.getDate();

            if (wsDay < 10) {
                wsDay = '0' + wsDay;
            } else {
                wsDay = wsDay;
            }

            var wsMonthIndex = initialWeekStart.getMonth();
            wsMonthIndex++;

            if (wsMonthIndex < 10) {
                wsMonthIndex = '0' + wsMonthIndex;
            } else {
                wsMonthIndex = wsMonthIndex;
            }

            var wsYear = initialWeekStart.getFullYear();
            wsYear = wsYear.toString().substring(2, 4);

            var weDay = initialWeekEnd.getDate();

            if (weDay < 10) {
                weDay = '0' + weDay;
            } else {
                weDay = weDay;
            }

            var weMonthIndex = initialWeekEnd.getMonth();
            weMonthIndex++;

            if (weMonthIndex < 10) {
                weMonthIndex = '0' + weMonthIndex;
            } else {
                weMonthIndex = weMonthIndex;
            }

            var weYear = initialWeekEnd.getFullYear();
            weYear = weYear.toString().substring(2, 4);

            weekStartStr = wsDay + "." + wsMonthIndex + "." + wsYear;
            weekEndStr = weDay + "." + weMonthIndex + "." + weYear;

            workWeeks.push({
                weekStart: weekStartStr,
                weekStartDate: initialWeekStart,
                weekEnd: weekEndStr,
                weekEndDate: initialWeekEnd,
                errors: 0
            });
        }
        else {
            initialWeekStart.setDate(initialWeekStart.getDate() + 7);
            initialWeekEnd.setDate(initialWeekEnd.getDate() + 7);

            var now = new Date();

            if (now < initialWeekStart) {
                break;
            }

            var wsDay = initialWeekStart.getDate();

            if (wsDay < 10) {
                wsDay = '0' + wsDay;
            } else {
                wsDay = wsDay;
            }

            var wsMonthIndex = initialWeekStart.getMonth();
            wsMonthIndex++;

            if (wsMonthIndex < 10) {
                wsMonthIndex = '0' + wsMonthIndex;
            } else {
                wsMonthIndex = wsMonthIndex;
            }

            var wsYear = initialWeekStart.getFullYear();
            wsYear = wsYear.toString().substring(2, 4);

            var weDay = initialWeekEnd.getDate();

            if (weDay < 10) {
                weDay = '0' + weDay;
            } else {
                weDay = weDay;
            }

            var weMonthIndex = initialWeekEnd.getMonth();
            weMonthIndex++;

            if (weMonthIndex < 10) {
                weMonthIndex = '0' + weMonthIndex;
            } else {
                weMonthIndex = weMonthIndex;
            }

            var weYear = initialWeekEnd.getFullYear();
            weYear = weYear.toString().substring(2, 4);

            weekStartStr = wsDay + "." + wsMonthIndex + "." + wsYear;
            weekEndStr = weDay + "." + weMonthIndex + "." + weYear;

            workWeeks.push({
                weekStart: weekStartStr,
                weekStartDate: initialWeekStart,
                weekEnd: weekEndStr,
                weekEndDate: initialWeekEnd,
                errors: 0
            });
        }
    }

    return workWeeks;
}

function addErrorWithWeek(user, workWeekIndex, errorCode) {
    if (workWeekIndex >= 0) {
        alert("errorCode: " + errorCode);
        user.workWeeks[workWeekIndex].errors++;
    }
}
