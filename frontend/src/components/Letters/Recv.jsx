import React from "react";

import WithSideLayout from "../common/WithSideLayout";
import LettersHeader from "./LettersHeader";
import LettersList from "./LettersList";

function Recv() {
  const headerTitle = "받은 쪽지함";
  const letters = [
    {
      id: "0",
      name: "jmlee9707",
      content: "lorem loremloremlorem lorem lorem",
      date: "22-04-27 [23:22]",
      isRead: "0"
    },
    {
      id: "1",
      name: "jmlee9707",
      content: "lorem loremloremlorem lorem lorem",
      date: "22-04-27 [23:22]",
      isRead: "1"
    }
  ];
  return (
    <WithSideLayout title={headerTitle} headerComponent={<LettersHeader />}>
      <LettersList letters={letters} />
    </WithSideLayout>
  );
}
export default Recv;
