import React from "react";

const Blogs = () => {
  return (
    <div className="container my-5">
      <h4 style={{ fontSize: "25px" }}>1. What is context api?</h4>
      <p style={{ fontSize: "20px", marginLeft: "27px", marginBottom: "10px" }}>
        React Context API যেকোনো component এর তথ্য অ্যাক্সেসের অনুমতি দেয়। এটি
        grandparent থেকে parent এবং parent থেকে child এর কাছে data প্রদান করতে
        পারে। এটি "prop drilling" এর বিকল্প হিসেবে ব্যবহার করা হয়। Context API
        এর মাধমে grandparent থেকে child এ সরাসরি ডাটা পাঠানো যায়। Context API এর
        মাধ্যমে Array, object, function ইত্যাদিকে পাঠানো যায়।
      </p>
      <h4 style={{ fontSize: "25px" }}>
        2. Difference between inline, block and inline-block element?
      </h4>
      <p style={{ fontSize: "20px", marginLeft: "27px", marginBottom: "5px" }}>
        <span style={{ color: "darkorange", fontWeight: 600 }}>Inline: </span>
        Inline element এটি একই লাইনে প্রদর্শন করে। Inline element নতুন লাইনে
        শুরু হয় না এবং শুধুমাত্র এর element এর প্রস্থ নেয়। যদি কোনো Inline
        element এ প্রস্থ এবং উচ্চতা সেট করার চেষ্টা করা হয়, তাহলে এর কোনো
        প্রভাব থাকবে না।
      </p>
      <p style={{ fontSize: "20px", marginLeft: "27px", marginBottom: "5px" }}>
        <span style={{ color: "darkorange", fontWeight: 600 }}>Block: </span>
        Block element এটি একই লাইনে প্রদর্শন করে না। Block element নতুন লাইনে
        শুরু হয়। Block element এ প্রস্থ, উচ্চতা এবং padding ব্যবহার করা যায়।
      </p>
      <p style={{ fontSize: "20px", marginLeft: "27px", marginBottom: "10px" }}>
        <span style={{ color: "darkorange", fontWeight: 600 }}>
          Inline-block:
        </span>
        Inline-block element এটি মূলত inline এর মতো একই জিনিস। Inline-block
        element এ প্রস্থ, উচ্চতা এবং padding ব্যবহার করা যায়। Inline-block ও
        inline এর মতো একই লাইনে প্রদর্শন করে।
      </p>
    </div>
  );
};

export default Blogs;
