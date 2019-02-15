var $protobuf = window.protobuf;
$protobuf.roots.default=window;
// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.NFMsgBase = (function() {

    /**
     * Namespace NFMsgBase.
     * @exports NFMsgBase
     * @namespace
     */
    var NFMsgBase = {};

    NFMsgBase.Ident = (function() {

        /**
         * Properties of an Ident.
         * @memberof NFMsgBase
         * @interface IIdent
         * @property {number|Long|null} [svrid] Ident svrid
         * @property {number|Long|null} [index] Ident index
         */

        /**
         * Constructs a new Ident.
         * @memberof NFMsgBase
         * @classdesc Represents an Ident.
         * @implements IIdent
         * @constructor
         * @param {NFMsgBase.IIdent=} [properties] Properties to set
         */
        function Ident(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Ident svrid.
         * @member {number|Long} svrid
         * @memberof NFMsgBase.Ident
         * @instance
         */
        Ident.prototype.svrid = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Ident index.
         * @member {number|Long} index
         * @memberof NFMsgBase.Ident
         * @instance
         */
        Ident.prototype.index = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new Ident instance using the specified properties.
         * @function create
         * @memberof NFMsgBase.Ident
         * @static
         * @param {NFMsgBase.IIdent=} [properties] Properties to set
         * @returns {NFMsgBase.Ident} Ident instance
         */
        Ident.create = function create(properties) {
            return new Ident(properties);
        };

        /**
         * Encodes the specified Ident message. Does not implicitly {@link NFMsgBase.Ident.verify|verify} messages.
         * @function encode
         * @memberof NFMsgBase.Ident
         * @static
         * @param {NFMsgBase.IIdent} message Ident message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Ident.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.svrid != null && message.hasOwnProperty("svrid"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.svrid);
            if (message.index != null && message.hasOwnProperty("index"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.index);
            return writer;
        };

        /**
         * Encodes the specified Ident message, length delimited. Does not implicitly {@link NFMsgBase.Ident.verify|verify} messages.
         * @function encodeDelimited
         * @memberof NFMsgBase.Ident
         * @static
         * @param {NFMsgBase.IIdent} message Ident message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Ident.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an Ident message from the specified reader or buffer.
         * @function decode
         * @memberof NFMsgBase.Ident
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {NFMsgBase.Ident} Ident
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Ident.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.NFMsgBase.Ident();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.svrid = reader.int64();
                    break;
                case 2:
                    message.index = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an Ident message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof NFMsgBase.Ident
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {NFMsgBase.Ident} Ident
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Ident.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an Ident message.
         * @function verify
         * @memberof NFMsgBase.Ident
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Ident.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.svrid != null && message.hasOwnProperty("svrid"))
                if (!$util.isInteger(message.svrid) && !(message.svrid && $util.isInteger(message.svrid.low) && $util.isInteger(message.svrid.high)))
                    return "svrid: integer|Long expected";
            if (message.index != null && message.hasOwnProperty("index"))
                if (!$util.isInteger(message.index) && !(message.index && $util.isInteger(message.index.low) && $util.isInteger(message.index.high)))
                    return "index: integer|Long expected";
            return null;
        };

        return Ident;
    })();

    NFMsgBase.MsgBase = (function() {

        /**
         * Properties of a MsgBase.
         * @memberof NFMsgBase
         * @interface IMsgBase
         * @property {NFMsgBase.IIdent|null} [player_id] MsgBase player_id
         * @property {Uint8Array|null} [msg_data] MsgBase msg_data
         * @property {Array.<NFMsgBase.IIdent>|null} [player_Client_list] MsgBase player_Client_list
         * @property {NFMsgBase.IIdent|null} [hash_ident] MsgBase hash_ident
         */

        /**
         * Constructs a new MsgBase.
         * @memberof NFMsgBase
         * @classdesc Represents a MsgBase.
         * @implements IMsgBase
         * @constructor
         * @param {NFMsgBase.IMsgBase=} [properties] Properties to set
         */
        function MsgBase(properties) {
            this.player_Client_list = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * MsgBase player_id.
         * @member {NFMsgBase.IIdent|null|undefined} player_id
         * @memberof NFMsgBase.MsgBase
         * @instance
         */
        MsgBase.prototype.player_id = null;

        /**
         * MsgBase msg_data.
         * @member {Uint8Array} msg_data
         * @memberof NFMsgBase.MsgBase
         * @instance
         */
        MsgBase.prototype.msg_data = $util.newBuffer([]);

        /**
         * MsgBase player_Client_list.
         * @member {Array.<NFMsgBase.IIdent>} player_Client_list
         * @memberof NFMsgBase.MsgBase
         * @instance
         */
        MsgBase.prototype.player_Client_list = $util.emptyArray;

        /**
         * MsgBase hash_ident.
         * @member {NFMsgBase.IIdent|null|undefined} hash_ident
         * @memberof NFMsgBase.MsgBase
         * @instance
         */
        MsgBase.prototype.hash_ident = null;

        /**
         * Creates a new MsgBase instance using the specified properties.
         * @function create
         * @memberof NFMsgBase.MsgBase
         * @static
         * @param {NFMsgBase.IMsgBase=} [properties] Properties to set
         * @returns {NFMsgBase.MsgBase} MsgBase instance
         */
        MsgBase.create = function create(properties) {
            return new MsgBase(properties);
        };

        /**
         * Encodes the specified MsgBase message. Does not implicitly {@link NFMsgBase.MsgBase.verify|verify} messages.
         * @function encode
         * @memberof NFMsgBase.MsgBase
         * @static
         * @param {NFMsgBase.IMsgBase} message MsgBase message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MsgBase.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.player_id != null && message.hasOwnProperty("player_id"))
                $root.NFMsgBase.Ident.encode(message.player_id, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.msg_data != null && message.hasOwnProperty("msg_data"))
                writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.msg_data);
            if (message.player_Client_list != null && message.player_Client_list.length)
                for (var i = 0; i < message.player_Client_list.length; ++i)
                    $root.NFMsgBase.Ident.encode(message.player_Client_list[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.hash_ident != null && message.hasOwnProperty("hash_ident"))
                $root.NFMsgBase.Ident.encode(message.hash_ident, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified MsgBase message, length delimited. Does not implicitly {@link NFMsgBase.MsgBase.verify|verify} messages.
         * @function encodeDelimited
         * @memberof NFMsgBase.MsgBase
         * @static
         * @param {NFMsgBase.IMsgBase} message MsgBase message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MsgBase.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a MsgBase message from the specified reader or buffer.
         * @function decode
         * @memberof NFMsgBase.MsgBase
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {NFMsgBase.MsgBase} MsgBase
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MsgBase.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.NFMsgBase.MsgBase();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.player_id = $root.NFMsgBase.Ident.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.msg_data = reader.bytes();
                    break;
                case 3:
                    if (!(message.player_Client_list && message.player_Client_list.length))
                        message.player_Client_list = [];
                    message.player_Client_list.push($root.NFMsgBase.Ident.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.hash_ident = $root.NFMsgBase.Ident.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a MsgBase message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof NFMsgBase.MsgBase
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {NFMsgBase.MsgBase} MsgBase
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MsgBase.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a MsgBase message.
         * @function verify
         * @memberof NFMsgBase.MsgBase
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        MsgBase.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.player_id != null && message.hasOwnProperty("player_id")) {
                var error = $root.NFMsgBase.Ident.verify(message.player_id);
                if (error)
                    return "player_id." + error;
            }
            if (message.msg_data != null && message.hasOwnProperty("msg_data"))
                if (!(message.msg_data && typeof message.msg_data.length === "number" || $util.isString(message.msg_data)))
                    return "msg_data: buffer expected";
            if (message.player_Client_list != null && message.hasOwnProperty("player_Client_list")) {
                if (!Array.isArray(message.player_Client_list))
                    return "player_Client_list: array expected";
                for (var i = 0; i < message.player_Client_list.length; ++i) {
                    var error = $root.NFMsgBase.Ident.verify(message.player_Client_list[i]);
                    if (error)
                        return "player_Client_list." + error;
                }
            }
            if (message.hash_ident != null && message.hasOwnProperty("hash_ident")) {
                var error = $root.NFMsgBase.Ident.verify(message.hash_ident);
                if (error)
                    return "hash_ident." + error;
            }
            return null;
        };

        return MsgBase;
    })();

    return NFMsgBase;
})();