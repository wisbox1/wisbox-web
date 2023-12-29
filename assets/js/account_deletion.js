async function postContactInfo(
  full_name,
  username,
  reg_email,
  contact_email,
  contact_phone,
  reason
) {
  // console.log("Data to be Sent", name, email, phone, subject, msg);
  var request_form = document.getElementById("request_form");
  //   var msg_txt = document.getElementById("message_txt");
  //   var contact_status = document.getElementById("contact_status");
  let url =
    "https://script.google.com/macros/s/AKfycbwCvfZaEhcFA_xdWS4paqUke8t-T3VIp2G3IfTVJdHQs_m0yZCPhiI_G8yhCdTI0BI8/exec";

  let date = new Date().toLocaleDateString();

  let obj = {
    full_name: full_name,
    username: username,
    reg_email: reg_email,
    contact_email: contact_email,
    contact_phone: contact_phone,
    reason: reason,
    local_date: date,
  };
  try {
    const upload = fetch(url, {
      method: "POST",
      body: JSON.stringify(obj),
    });
    upload
      .then((r) => r.text())
      .then((data) => {
        console.log(JSON.parse(data));
        request_form.reset();
        request_form.hidden = true;
        alert("Submitted Successfully");
        return JSON.parse(data);
      });
  } catch (err) {
    console.log("Error: ", err);
  }
}
