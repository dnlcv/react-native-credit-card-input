import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ViewPropTypes,
} from "react-native";

const s = StyleSheet.create({
  baseInputStyle: {
    color: "black",
  },
});

  class CCInput extends Component {

    static propTypes = {
      field: PropTypes.string.isRequired,
      label: PropTypes.string,
      value: PropTypes.string,
      placeholder: PropTypes.string,
      keyboardType: PropTypes.string,

      status: PropTypes.oneOf(["valid", "invalid", "incomplete"]),

      containerStyle: ViewPropTypes.style,
      inputStyle: Text.propTypes.style,
      labelStyle: Text.propTypes.style,
      validColor: PropTypes.string,
      invalidColor: PropTypes.string,
      placeholderColor: PropTypes.string,

      onFocus: PropTypes.func,
      onChange: PropTypes.func,
      onBecomeEmpty: PropTypes.func,
      onBecomeValid: PropTypes.func,
      additionalInputProps: PropTypes.shape(TextInput.propTypes),
    };

    static defaultProps = {
      label: "",
      value: "",
      status: "incomplete",
      containerStyle: {},
      inputStyle: {},
      labelStyle: {},
      onFocus: () => {},
      onChange: () => {},
      onBecomeEmpty: () => {},
      onBecomeValid: () => {},
      additionalInputProps: {},
    };

    componentDidUpdate = prevProps => {
      const { status, value, onBecomeEmpty, onBecomeValid, field } = prevProps;
      const { status: newStatus, value: newValue } = this.props;
      if (value !== "" && newValue === "") onBecomeEmpty(field);
      if (status !== "valid" && newStatus === "valid") onBecomeValid(field);
    };

    _onFocus = () => this.props.onFocus(this.props.field);
    _onChange = value => this.props.onChange(this.props.field, value);


    render() {
      const { label, value, placeholder, status, keyboardType,
              containerStyle, inputStyle, labelStyle,
              validColor, invalidColor, placeholderColor,
              additionalInputProps, hideLabels } = this.props;
      return (
        <TouchableOpacity
          activeOpacity={0.99}>
          <View style={[containerStyle]}>
            { !hideLabels && (!!label && <Text style={[labelStyle]}>{label}</Text>)}
            <TextInput ref={this.props.innerRef}
              {...additionalInputProps}
              keyboardType={keyboardType}
              autoCapitalize="words"
              autoCorrect={false}
              style={[
                s.baseInputStyle,
                inputStyle,
                ((validColor && status === "valid") ? { color: validColor } :
                (invalidColor && status === "invalid") ? { color: invalidColor } :
                {}),
              ]}
              underlineColorAndroid={"transparent"}
              placeholderTextColor={placeholderColor}
              placeholder={placeholder}
              value={value}
              onFocus={this._onFocus}
              onChangeText={this._onChange} />
          </View>
        </TouchableOpacity>
      );
    }
  }

export default React.forwardRef((props, ref) => <CCInput innerRef={ref} {...props} />);
