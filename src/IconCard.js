import React, { useRef } from 'react';
import { Image, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

const IconCard = ({ type, iconStyle }) => {

  const icon = useRef();
  const typeCard = type.toLowerCase().replace(" ","-");

  switch(typeCard) {
    case 'visa':
      icon = require("./icons/stp_card_visa.png");
      break;
    case 'american-express':
      icon = require("./icons/stp_card_amex.png");
      break;
    case 'jcb':
      icon = require("./icons/stp_card_jcb.png");
      break;
    case 'mastercard':
      icon = require("./icons/stp_card_mastercard.png");
      break;
    case 'discover':
      icon = require("./icons/stp_card_discover.png");
      break;
    case 'diners-club':
      icon = require("./icons/stp_card_diners.png");
      break;
    case 'unionpay':
      icon = require("./icons/stp_card_unknown.png");
      break;
    default:
  }

  return (
    <Image style={[styles.icon, iconStyle]} source={icon.current} />
  )
}

const styles = StyleSheet.create({
  cardContainer: {},
  icon: {
    width: 60,
    height: 40,
    resizeMode: "contain"
  }
})

IconCard.propTypes = {
  icon: PropTypes.string,
  iconStyle: PropTypes.object,
};

export default IconCard;
