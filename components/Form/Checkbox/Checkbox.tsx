import React, { useEffect, useRef } from 'react';
import { useField } from '@unform/core';
import classnames from 'classnames';
import styles from './Checkbox.module.scss';
import Image from 'next/image';

export type CheckboxProps = React.HTMLAttributes<HTMLInputElement> & {
  className?: 'toggle' | 'checkmark' | 'box' | 'circle';
  checked?: boolean;
  name: string;
  options: {
    id: string;
    value: string;
    label?: string;
    image?: string;
    checked?: boolean;
  }[];
};

const sizes = {
  box: 120,
  circle: 100,
};

export default function Checkbox({
  name,
  className,
  options,
  ...rest
}: CheckboxProps): JSX.Element {
  const inputRefs = useRef<HTMLInputElement[]>([]);
  const { fieldName, defaultValue = [], registerField } = useField(name);
  const size = sizes[className];

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRefs.current,
      getValue: (refs: HTMLInputElement[]) => {
        return refs.filter((ref) => ref.checked).map((ref) => ref.value);
      },
      clearValue: (refs: HTMLInputElement[]) => {
        refs.forEach((ref) => {
          ref.checked = false;
        });
      },
      setValue: (refs: HTMLInputElement[], values: string[]) => {
        refs.forEach((ref) => {
          if (values.includes(ref.id)) {
            ref.checked = true;
          }
        });
      },
    });
  }, [fieldName, name, registerField]);

  return (
    <div
      className={classnames(
        classnames(styles.container, {
          [styles.toggle]: className === 'toggle',
          [styles.checkmark]: className === 'checkmark',
          [styles.box]: className === 'box',
          [styles.circle]: className === 'circle',
        })
      )}
    >
      {options.map((option, index) => (
        <div key={`${option.id}-${name}`} className={styles.wrapper}>
          {option.image ? null : (
            <label className="quote-reduced">{option.label}</label>
          )}
          <div className={classnames(styles.checkbox)}>
            <label htmlFor={option.id}>
              <input
                defaultChecked={option.checked}
                ref={(ref) => ref && (inputRefs.current[index] = ref)}
                value={option.value}
                type="checkbox"
                id={option.id}
                className={styles.input}
                name={name}
                checked={option.checked}
                // {...rest}
              />
              <span className={styles.icon}></span>
              {option.image && (
                <>
                  {!!option.image?.match('.mp4') ? (
                    <video className={styles.image} width="120" height="120" loop autoPlay>
                      <source src={option.image} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  ) : (
                    <Image
                      src={option.image}
                      alt={option.label}
                      width={size}
                      height={size}
                      className={styles.image}
                    />
                  )}
                </>
              )}
            </label>
          </div>
        </div>
      ))}
    </div>
  );
}
