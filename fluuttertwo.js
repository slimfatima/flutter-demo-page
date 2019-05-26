const API_publicKey = "FLWPUBK-b55586524308f4b77b5523a59ebd66cf-X";
let test = {
            PBFPubKey: API_publicKey,
            customer_email: "user@example.com",
            amount: 80000,
            currency: "NGN",
            txref: "rave-1234",
            // hosted_payment: 1,
            payment_options:"card,account",
            subaccounts: [
              {
                id: "RS_919101A34FFEE1A4A75824146A0438B5",
                transaction_charge_type: "flat_subaccount",
 transaction_charge: "20000"
              },
              
               {
                id: "RS_A375EDFC3A48E4184C445BE6BBBB274C",
                transaction_charge_type: "flat_subaccount",
 transaction_charge: "10000"
              },
              
              {
                id: "RS_60E664A0758CA2E0D497F8BDA35960C2",
                transaction_charge_type: "flat_subaccount",
 transaction_charge: "48880"
              }
            ],
            meta: [{
                metaname: "flightID",
                metavalue: "AP1234"
            }],
            onclose: function() {},
            callback: function(response) {
                var txref = response.tx.txRef; // collect flwRef returned and pass to a 					server page to complete status check.
                console.log("This is the response returned after a charge", response);
                if (
                    response.tx.chargeResponseCode == "00" ||
                    response.tx.chargeResponseCode == "0"
                ) {
                    // redirect to a success page
                  console.log("Hello");
                } else {
                    // redirect to a failure page.
                }

                x.close(); // use this to close the modal immediately after payment.
            }
        }
    function payWithRave() {

        var x = getpaidSetup(test);
    }