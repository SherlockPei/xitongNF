type Long = protobuf.Long;
// DO NOT EDIT! This is a generated file. Edit the JSDoc in src/*.js instead and run 'npm run types'.

/** Namespace NFMsgBase. */
declare namespace NFMsgBase {

    /** Properties of an Ident. */
    interface IIdent {

        /** Ident svrid */
        svrid?: (number|Long|null);

        /** Ident index */
        index?: (number|Long|null);
    }

    /** Represents an Ident. */
    class Ident implements IIdent {

        /**
         * Constructs a new Ident.
         * @param [properties] Properties to set
         */
        constructor(properties?: NFMsgBase.IIdent);

        /** Ident svrid. */
        public svrid: (number|Long);

        /** Ident index. */
        public index: (number|Long);

        /**
         * Creates a new Ident instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Ident instance
         */
        public static create(properties?: NFMsgBase.IIdent): NFMsgBase.Ident;

        /**
         * Encodes the specified Ident message. Does not implicitly {@link NFMsgBase.Ident.verify|verify} messages.
         * @param message Ident message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: NFMsgBase.IIdent, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified Ident message, length delimited. Does not implicitly {@link NFMsgBase.Ident.verify|verify} messages.
         * @param message Ident message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: NFMsgBase.IIdent, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes an Ident message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Ident
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): NFMsgBase.Ident;

        /**
         * Decodes an Ident message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Ident
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): NFMsgBase.Ident;

        /**
         * Verifies an Ident message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a MsgBase. */
    interface IMsgBase {

        /** MsgBase player_id */
        player_id?: (NFMsgBase.IIdent|null);

        /** MsgBase msg_data */
        msg_data?: (Uint8Array|null);

        /** MsgBase player_Client_list */
        player_Client_list?: (NFMsgBase.IIdent[]|null);

        /** MsgBase hash_ident */
        hash_ident?: (NFMsgBase.IIdent|null);
    }

    /** Represents a MsgBase. */
    class MsgBase implements IMsgBase {

        /**
         * Constructs a new MsgBase.
         * @param [properties] Properties to set
         */
        constructor(properties?: NFMsgBase.IMsgBase);

        /** MsgBase player_id. */
        public player_id?: (NFMsgBase.IIdent|null);

        /** MsgBase msg_data. */
        public msg_data: Uint8Array;

        /** MsgBase player_Client_list. */
        public player_Client_list: NFMsgBase.IIdent[];

        /** MsgBase hash_ident. */
        public hash_ident?: (NFMsgBase.IIdent|null);

        /**
         * Creates a new MsgBase instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MsgBase instance
         */
        public static create(properties?: NFMsgBase.IMsgBase): NFMsgBase.MsgBase;

        /**
         * Encodes the specified MsgBase message. Does not implicitly {@link NFMsgBase.MsgBase.verify|verify} messages.
         * @param message MsgBase message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: NFMsgBase.IMsgBase, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified MsgBase message, length delimited. Does not implicitly {@link NFMsgBase.MsgBase.verify|verify} messages.
         * @param message MsgBase message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: NFMsgBase.IMsgBase, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a MsgBase message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns MsgBase
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): NFMsgBase.MsgBase;

        /**
         * Decodes a MsgBase message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns MsgBase
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): NFMsgBase.MsgBase;

        /**
         * Verifies a MsgBase message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }
}
