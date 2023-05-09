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

import { Block } from "../Block.js";
import { Alert } from "../../application/Alert.js";

export class Key
{
	private name$:string = null;
	private block$:string = null;
	private fields$:string[] = null;


	constructor(block:string|Block, fields:string|string[])
	{
		if (block == null)
		{
			Alert.fatal("Invalid key definition, block: 'null'","Key");
			return;
		}

		if (fields == null)
		{
			Alert.fatal("Invalid key definition, fields: 'null'","Key");
			return;
		}

		if (!Array.isArray(fields))
			fields = [fields];

		if (fields.length == 0)
		{
			Alert.fatal("Invalid key definition, no fields","Key");
			return;
		}

		if (typeof block != "string")
			block = block.name;

		this.block$ = block.toLowerCase();

		this.fields$ = fields;

		for (let i = 0; i < fields.length; i++)
			fields[i] = fields[i].toLowerCase();
	}

	public get name() : string
	{
		return(this.name$);
	}

	public get block() : string
	{
		return(this.block$);
	}

	public get fields() : string[]
	{
		return(this.fields$);
	}
}