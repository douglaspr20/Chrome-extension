import { Input, Form as AntForm, ColProps, Popover } from "antd";
import { SizeType } from "antd/lib/config-provider/SizeContext";
import { memo, ReactNode } from "react";
import { SchemaOf } from "yup";
import styled from "styled-components";
import { RenderFunction } from "antd/lib/_util/getRenderPropValue";
import { TooltipPlacement } from "antd/lib/tooltip";
import { ControllerRenderProps } from "react-hook-form/dist/types/controller";
import { Controller } from "react-hook-form";
import isEqual from "lodash/isEqual";
import { isRequired } from "../../../../../CollectiveOS/modules/shared/functions/formHelpers";

const { Item: FormItem } = AntForm;

const TextInputWrapper = styled.div`
  .ant-input-suffix {
    padding: 0;
    svg {
      margin-right: 10px;
      color: #c4c4c4;
    }
  }

  .with-addon {
    .ant-form-item-control-input-content {
      border-top-right-radius: 0 !important;
      border-bottom-right-radius: 0 !important;
    }
  }

  .ant-input-affix-wrapper-focused {
    border-color: #ffb640 !important;
    box-shadow: 0 0 0 2px rgb(249 155 23 / 20%) !important;
    outline: 0 !important;
  }

  .ant-input-group-addon {
    border-color: #e9e9e9 !important;
    color: ${(props) => props.theme.colors.grey600};
    font-size: 13px;
    background: ${(props) => props.theme.colors.grey100};
    min-width: 62px;
    letter-spacing: 1px;
    padding-left: 16px;
    padding-right: 16px;
  }

  .input-bookmark {
    border-color: #e9e9e9 !important;
    padding: 0;
    height: 48px;
    margin-bottom: 10px;
  }

  .input-bookmark .ant-input {
    padding-left: 16px;
  }

  .input-bookmark .ant-input-suffix {
    padding: 0px 14px;
    text-align: center;
    background: #fafafa;
    border-left: 1px solid #e9e9e9;
  }

  .ant-input-show-count-suffix {
    width: 60px;
    color: #141414;
  }

  .custom-show-count {
    color: #f99b17;
  }
`;

interface PopOverType {
  title?: React.ReactNode | RenderFunction;
  content?: React.ReactNode | RenderFunction;
  placement: TooltipPlacement;
}

interface TextInputProps {
  name: string;
  label?: string;
  size?: SizeType;
  control: any;
  defaultValue?: any;
  placeholder?: string;
  prefix?: ReactNode;
  password?: boolean;
  validationSchema?: SchemaOf<any>;
  errors?: any;
  disabled?: boolean;
  fieldType?: string;
  type?: string;
  rows?: number | undefined;
  suffix?: ReactNode;
  labelCol?: ColProps;
  addonAfter?: ReactNode;
  addonBefore?: ReactNode | string;
  required?: boolean;
  min?: number;
  max?: number;
  className?: string;
  popOver?: PopOverType;
  maxLength?: number;
  showCount?: boolean | undefined;
}

interface FieldProps {
  field: ControllerRenderProps<any>;
}

export const TextInput = memo(
  ({
    name,
    label,
    size,
    control,
    defaultValue,
    placeholder,
    prefix,
    password,
    validationSchema,
    errors,
    disabled,
    fieldType,
    type,
    rows,
    suffix,
    labelCol,
    addonAfter,
    addonBefore,
    required,
    min,
    max,
    className,
    popOver,
    maxLength,
    showCount,
  }: TextInputProps) => {
    let Field = ({ field }: FieldProps) => (
      <Input
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...field}
        type={type}
        disabled={disabled}
        placeholder={placeholder}
        size={size}
        prefix={prefix}
        addonAfter={addonAfter}
        addonBefore={addonBefore}
        max={max}
        min={min}
        defaultValue={defaultValue}
        className={`${className} ${
          addonAfter || addonBefore ? "with-addon" : ""
        }`}
        suffix={suffix}
        showCount={
          showCount && {
            formatter: (info: {
              value: string;
              count: number;
              maxLength?: number;
            }) => (
              <div>
                <span className="custom-show-count">{info.count}</span>

                <span>/{info.maxLength}</span>
              </div>
            ),
          }
        }
        maxLength={maxLength}
      />
    );

    if (password) {
      Field = ({ field }: FieldProps) => (
        <Input.Password
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...field}
          suffix={suffix}
          disabled={disabled}
          placeholder={placeholder}
          size={size}
          prefix={prefix}
          defaultValue={defaultValue}
          className={className}
        />
      );
    }

    if (fieldType === "textArea") {
      Field = ({ field }: FieldProps) => (
        <Input.TextArea
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...field}
          rows={rows}
          disabled={disabled}
          placeholder={placeholder}
          size={size}
          defaultValue={defaultValue}
          className={className}
        />
      );
    }

    let error;

    if (name.includes(".")) {
      const nameIndexes = name.split(".");

      if (
        errors &&
        nameIndexes.length === 3 &&
        errors[nameIndexes[0]] &&
        errors[nameIndexes[0]][nameIndexes[1]]
      ) {
        error = errors[nameIndexes[0]][nameIndexes[1]][nameIndexes[2]];
      }
    } else if (errors) {
      error = errors[name];
    }

    return (
      <TextInputWrapper>
        <FormItem
          required={
            required || (validationSchema && isRequired(validationSchema, name))
          }
          label={label}
          name={name}
          labelCol={labelCol}
          validateStatus={errors && error ? "error" : ""}
          help={errors && error?.message}
          className="app-text-input"
        >
          {popOver ? (
            <Popover
              placement={popOver?.placement}
              title={popOver?.title}
              content={popOver?.content}
              trigger="click"
            >
              <Controller
                render={({ field }) => <Field field={field} />}
                control={control}
                name={name}
              />
            </Popover>
          ) : (
            <Controller
              render={({ field }) => <Field field={field} />}
              control={control}
              name={name}
            />
          )}
        </FormItem>
      </TextInputWrapper>
    );
  },
  (prevProps, nextProps) => {
    return (
      isEqual(prevProps.errors, nextProps.errors) &&
      isEqual(prevProps.validationSchema, nextProps.validationSchema) &&
      prevProps.className === nextProps.className
    );
  }
);
