﻿namespace SCADA_Back.Exceptions
{
	public class EntityNotFoundException : Exception
	{
		public EntityNotFoundException() : base() { }

		public EntityNotFoundException(string message) : base(message)
		{

		}
	}
}
