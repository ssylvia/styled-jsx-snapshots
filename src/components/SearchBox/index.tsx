import React, {
  PureComponent,
  ReactNode,
  KeyboardEvent,
  ChangeEvent
} from "react";
import variables from "../../variables";
import { IconSearch, IconClose } from "../Icons";
import { screenReaderOnly } from "../../mixins";

export interface Props {
  /** Additional classnames to add to the component */
  className?: string;
  /** An ID attribute to use for a11y */
  id: string;
  label: ReactNode;
  /** The input placeholder attribute */
  placeholder: string;
  /** The string to use as the clear/reset title and aria-labeled attributes */
  clearBtnLabel: string;
  /** onClear event handler */
  onClear: () => void;
  /** onChange event handler */
  onChange: (val: string) => void;
  /** onKeydown event handler */
  onKeydown?: (e: KeyboardEvent<HTMLInputElement>) => void;
  /** Auto complete / suggest AKA `<input>`'s `autocomplete` attribute */
  preventAutoComplete?: boolean;
}

interface State {
  value: string;
}

export class SearchBox extends PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { value: "" };
  }

  public render() {
    return (
      <div className={this.props.className}>
        <label htmlFor={this.props.id}>{this.props.label}</label>
        <IconSearch />
        <input
          id={this.props.id}
          type="text"
          required
          value={this.state.value}
          placeholder={this.props.placeholder}
          onChange={this.onInputChange}
          onKeyDown={this.props.onKeydown}
          autoComplete={this.props.preventAutoComplete ? "off" : "on"}
        />
        <button
          type="button"
          onClick={this.onClear}
          aria-label={this.props.clearBtnLabel}
          title={this.props.clearBtnLabel}
        >
          <IconClose />
        </button>

        <style jsx>{`
          div {
            position: relative;
          }

          label {
            ${screenReaderOnly()};
          }

          div :global(.icon-search) {
            position: absolute;
            top: 1.6rem;
            left: 1.6rem;
            font-size: 2rem;
            opacity: 0.3;
          }

          :global(html[dir="rtl"]) div :global(.icon-search) {
            right: 1.6rem;
            left: auto;
          }

          button {
            position: absolute;
            line-height: 1rem;
            padding: 1.6rem;
            top: 0;
            right: 0;
            font-size: 2rem;
            color: ${variables.color.gray6};
            opacity: 0.8;
          }

          input:not(:valid) ~ button {
            display: none;
          }

          :global(html[dir="rtl"]) button {
            right: auto;
            left: 0;
          }

          input {
            box-sizing: border-box;
            width: 100%;
            border: none;
            padding: 1.6rem 4.8rem 1.6rem 4.8rem;
            /** TODO: Use style guide for color */
            background-color: #e7efef;
            font-size: ${variables.font.size.medium};
            color: ${variables.color.gray6};
            /* TODO: Visual focus indication needed in the future */
            outline: none;
          }
        `}</style>
      </div>
    );
  }

  /**
   * This can be called in parent component.
   *
   * @param {string} value - the value to set
   * @param {boolean} shouldTriggerOnValueChange - if `true`, then trigger `this.onValueChange()`
   *
   * @memberof SearchBox
   */
  public setValue = (value: string, shouldTriggerOnValueChange?: boolean) => {
    this.setState({ value });

    if (shouldTriggerOnValueChange) {
      this.onValueChange(value);
    }
  };

  public onClear = () => {
    this.setValue("", true);
  };

  /**
   * Input `ChangeEvent` handler
   *
   * @private
   * @memberof SearchBox
   */
  private onInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    this.setValue(value, true);
  };

  /**
   * Note: this never changes the `this.state.value`.
   *
   * @private
   * @memberof SearchBox
   */
  private onValueChange = (value: string) => {
    if (value.length === 0) {
      this.props.onClear();
    } else {
      this.props.onChange(value);
    }
  };
}

export default SearchBox;
