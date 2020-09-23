import React, { useRef } from "react";
import { Image, StyleSheet } from "react-native";
import PropTypes from "prop-types";

const IconCard = ({ type, iconStyle }) => {

  const willMount = useRef(true);
  const setCard = useRef();

  const selectIconCard = () => {
    const typeCard = type.toLowerCase().replace(" ", "-");

    switch (typeCard) {
      case "visa":
        setCard.current = require("./icons/stp_card_visa.png");
        break;
      case "american-express":
        setCard.current = require("./icons/stp_card_amex.png");
        break;
      case "jcb":
        setCard.current = require("./icons/stp_card_jcb.png");
        break;
      case "mastercard":
        setCard.current = require("./icons/stp_card_mastercard.png");
        break;
      case "discover":
        setCard.current = require("./icons/stp_card_discover.png");
        break;
      case "diners-club":
        setCard.current = require("./icons/stp_card_diners.png");
        break;
      case "unionpay":
        setCard.current = require("./icons/stp_card_unknown.png");
        break;
      default:
    }
  };

  //WillMount effect
  if (willMount.current) {
    //This runs only once before rendering the component
    willMount.current = false;
    //Choose icon card
    selectIconCard();
  }

  return <Image style={[styles.icon, iconStyle]} source={setCard.current} />;
};

const styles = StyleSheet.create({
  cardContainer: {},
  icon: {
    width: 60,
    height: 40,
    resizeMode: "contain",
  },
});

IconCard.propTypes = {
  icon: PropTypes.string,
  iconStyle: PropTypes.object,
};

export default IconCard;
