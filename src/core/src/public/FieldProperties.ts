/*
  MIT License

  Copyright © 2023 Alex Høffner

  Permission is hereby granted, free of charge, to any person obtaining a copy of this software
  and associated documentation files (the “Software”), to deal in the Software without
  restriction, including without limitation the rights to use, copy, modify, merge, publish,
  distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the
  Software is furnished to do so, subject to the following conditions:

  The above copyright notice and this permission notice shall be included in all copies or
  substantial portions of the Software.

  THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING
  BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
  NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
  DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
  FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

import { Class } from '../types/Class.js';
import { Alert } from '../application/Alert.js';
import { DataType } from '../view/fields/DataType.js';
import { DataMapper } from '../view/fields/DataMapper.js';
import { BasicProperties } from '../view/fields/BasicProperties.js';
import { FieldFeatureFactory } from '../view/FieldFeatureFactory.js';

/**
 * HTML Properties used by bound fields
 */
export class FieldProperties extends BasicProperties
{
	constructor(properties:BasicProperties)
	{
		super();

		if (properties != null)
			FieldFeatureFactory.copyBasic(properties,this);
	}

	public clone() : FieldProperties
	{
		return(new FieldProperties(this));
	}

	/** The tag ie. div, span, input etc */
	public setTag(tag:string) : FieldProperties
	{
		this.tag = tag;
		return(this);
	}

	/** Underlying datatype. Inherited but cannot be changed */
	public setType(_type:DataType) : FieldProperties
	{
		Alert.fatal("Data type cannot be changed","Properties");
		return(this);
	}

	public setEnabled(flag:boolean) : FieldProperties
	{
		this.enabled = flag;
		return(this);
	}

	public setReadOnly(flag:boolean) : FieldProperties
	{
		this.readonly = flag;
		return(this);
	}

	/** Determines if field is bound to datasource or not. Inherited but cannot be changed */
	public setDerived(_flag:boolean) : FieldProperties
	{
		Alert.fatal("Derived cannot be changed","Properties");
		return(this);
	}

	public setRequired(flag:boolean) : FieldProperties
	{
		this.required = flag;
		return(this);
	}

	public setHidden(flag:boolean) : FieldProperties
	{
		this.hidden = flag;
		return(this);
	}

	public setStyle(style:string, value:string) : FieldProperties
	{
		super.setStyle(style,value);
		return(this);
	}

	public setStyles(styles:string) : FieldProperties
	{
		this.styles = styles;
		return(this);
	}

	public removeStyle(style:string) : FieldProperties
	{
		super.removeStyle(style);
		return(this);
	}

	public setClass(clazz:string) : FieldProperties
	{
		super.setClass(clazz);
		return(this);
	}

	public setClasses(classes:string|string[]) : FieldProperties
	{
		super.setClasses(classes);
		return(this);
	}

	public removeClass(clazz:any) : FieldProperties
	{
		super.removeClass(clazz);
		return(this);
	}

	public setAttribute(attr:string, value?:any) : FieldProperties
	{
		super.setAttribute(attr,value);
		return(this);
	}

	public setAttributes(attrs:Map<string,string>) : FieldProperties
	{
		super.setAttributes(attrs);
		return(this);
	}

	public removeAttribute(attr:string) : FieldProperties
	{
		super.removeAttribute(attr);
		return(this);
	}

	public setValue(value:string) : FieldProperties
	{
		this.value = value;
		return(this);
	}

    public setValidValues(values: string[] | Set<any> | Map<any,any>) : FieldProperties
	{
		this.validValues = values;
		return(this);
	}

	/** Set a two-way data mapper */
	public setMapper(mapper:Class<DataMapper>|DataMapper|string) : FieldProperties
	{
		super.setMapper(mapper);
		return(this);
	}
}