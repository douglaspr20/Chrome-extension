import { Checkbox, ColProps, Form as AntForm } from "antd";
import { Controller, useWatch } from "react-hook-form";
import { SchemaOf } from "yup";
import styled from "styled-components";
import { isRequired } from "../functions/formHelpers";

const { Item: FormItem } = AntForm;

interface CheckBoxFieldProps {
  name: string;
  label: string;
  control: any;
  validationSchema?: SchemaOf<any>;
  errors: any;
  labelCol?: ColProps;
  disabled?: boolean;
}

const CheckBoxFieldWrapper = styled.div`
  .ant-checkbox {
    display: none;
  }

  .ant-checkbox + span {
    padding-left: 0;
  }

  .check-box-inner {
    display: flex;
    align-items: center;
  }

  .check-box-label {
    margin-left: 10px;
    font-size: 14px;
    color: #666;
  }

  .check-box-img {
    position: relative;
    display: inline-block;

    .check-box-box {
    }

    .check-box-mark {
      position: absolute;
      top: 6px;
      left: 4px;
      opacity: 1;
      transition: opacity 0.3s;

      &.mark-hidden {
        opacity: 0;
      }
    }
  }
`;

export const CheckBoxField = ({
  name,
  control,
  validationSchema,
  errors,
  disabled,
  label,
  labelCol,
}: CheckBoxFieldProps) => {
  const checkBoxValue = useWatch({
    control,
    name,
  });

  return (
    <CheckBoxFieldWrapper>
      <FormItem
        required={validationSchema && isRequired(validationSchema, name)}
        name={name}
        labelCol={labelCol}
        validateStatus={errors && errors[name] ? "error" : ""}
        help={errors && errors[name]?.message}
      >
        <Controller
          name={name}
          control={control}
          render={({ field }) => {
            const { onChange, value } = field;

            return (
              <div>
                <Checkbox
                  // eslint-disable-next-line react/jsx-props-no-spreading
                  {...field}
                  onChange={(event) => {
                    onChange(event.target.checked);
                  }}
                  checked={value}
                  disabled={disabled}
                >
                  <div className="check-box-inner">
                    <div className="check-box-img">
                      <img
                        src="/images/checkbox.png"
                        alt="Check box"
                        className="check-box-box"
                      />
                      <img
                        src="/images/check-mark.png"
                        alt="Check mark"
                        className={`check-box-mark ${
                          !checkBoxValue && "mark-hidden"
                        }`}
                      />
                    </div>

                    <span className="check-box-label">{label}</span>
                  </div>
                </Checkbox>
              </div>
            );
          }}
        />
      </FormItem>
    </CheckBoxFieldWrapper>
  );
};
