Shader "Custom/VertexLit Color"
{
    Properties
    {
        _Color ("Color", Color) = (1,1,1,1)
    }
    SubShader
    {
        Tags { "RenderType"="Opaque" "PerformanceChecks"="False" }
        LOD 150

        // Pass for casting shadows (optional, but needed to cast shadows)
        Pass
        {
            Name "ShadowCaster"
            Tags { "LightMode" = "ShadowCaster" }

            CGPROGRAM
            #pragma vertex vert
            #pragma fragment frag
            #pragma target 2.0
            #pragma multi_compile_shadowcaster
            #include "UnityCG.cginc"

            struct v2f {
                V2F_SHADOW_CASTER;
            };

            v2f vert(appdata_base v)
            {
                v2f o;
                TRANSFER_SHADOW_CASTER_NORMALOFFSET(o);
                return o;
            }

            float4 frag(v2f i) : SV_Target
            {
                SHADOW_CASTER_FRAGMENT(i);
            }
            ENDCG
        }

        // ForwardBase pass: directional light + ambient + shadows
        Pass
        {
            Name "FORWARD"
            Tags { "LightMode" = "ForwardBase" }

            CGPROGRAM
            #pragma vertex vert
            #pragma fragment frag
            #pragma multi_compile_fwdbase   // includes shadows, fog
            #pragma multi_compile_fog
            #include "UnityCG.cginc"
            #include "Lighting.cginc"
            #include "AutoLight.cginc"      // for shadow macros

            fixed4 _Color;

            struct v2f
            {
                float4 pos : SV_POSITION;
                float3 ambient : TEXCOORD0;
                float3 diffuse : TEXCOORD1;
                SHADOW_COORDS(2)             // shadow coordinates (TEXCOORD2)
                UNITY_FOG_COORDS(3)          // fog (TEXCOORD3)
            };

            v2f vert (appdata_base v)
            {
                v2f o;
                o.pos = UnityObjectToClipPos(v.vertex);
                
                // World normal
                half3 worldNormal = UnityObjectToWorldNormal(v.normal);
                // Directional light (main light) direction and intensity
                half nl = max(0, dot(worldNormal, _WorldSpaceLightPos0.xyz));
                o.diffuse = nl * _LightColor0.rgb;
                
                // Ambient from Skybox or Ambient Color
                o.ambient = ShadeSH9(half4(worldNormal, 1));
                
                // Compute shadow coordinates (for directional light it's screen space)
                TRANSFER_SHADOW(o);
                
                UNITY_TRANSFER_FOG(o, o.pos);
                return o;
            }

            fixed4 frag (v2f i) : SV_Target
            {
                fixed4 col = _Color;
                
                // Compute shadow attenuation (1 = fully lit, 0 = fully shadowed)
                fixed shadow = SHADOW_ATTENUATION(i);
                
                // Lighting = diffuse + ambient
                fixed3 lighting = (i.diffuse + i.ambient) * shadow;
                col.rgb *= lighting;
                
                UNITY_APPLY_FOG(i.fogCoord, col);
                return col;
            }
            ENDCG
        }
    }
    FallBack "VertexLit"
}